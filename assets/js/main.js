/* Variables */

const jobsBlock = document.querySelector('.jobs-block');
const theme = document.querySelector('#theme-check');
const body = document.querySelector('body')
const jobsTitle = document.querySelector('#jobs-head');
const jobsLocation = document.querySelector("#jobs-location");
const jobsType = document.querySelector('#jobs-type');

const searchForm = document.querySelector('#search_form');

let result = [];

let addForm = document.querySelector('#add-job-form');
let editForm = document.querySelector('#edit-job-form');
let addJobBtn = document.querySelector('#add-job-btn');





let addJobId = document.querySelector('#add-job-id');
let addJobTitle = document.querySelector('#add-job-title');
let addImgUrl = document.querySelector('#add-img-url');
let addWorkType = document.querySelector('#add-work-type');
let addJobCompany = document.querySelector('#add-job-company');
let addJobLocation = document.querySelector('#add-job-location');



/*

Step 4 Tasks (Current)

- Edit
- Delete
- Full optimize

*/

let data = []
let page = getCurrentUrl();

let jobsData = localStorage.getItem('jobsData');


if (jobsData) {
    try {
        data = JSON.parse(jobsData);
    }
    catch (err) {
        console.error(err);
    }
}

function getData(a) {
    let dataHtml = '';

    a.map((item) => {
        dataHtml += `
        <div class="jobs-item">
        <div class="jobs-item_img">
            <img src="${item.img}" alt="">
        </div>
        <div class="jobs-item_body">
            <div class="jobs-item_info">
                <p>${item.time}</p>
                <p>${item.workType}</p>
            </div>
            <a href="/inner.html?id=${item.id}" class="jobs-item_head">
                ${item.title}
            </a>
            <div class="jobs-item_company">
                ${item.company}
            </div>
        </div>
        <div class="jobs-item_footer">
            <p class="jobs-item_location">${item.location}</p>
            <a href="/edit.html?id=${item.id}"  class="jobs-item_location">Edit</a>
            <a href='#' onClick='deleteJob(${item.id})' class="jobs-item_location">Delete</a>
        </div>
    </div>
        `
    })

    jobsBlock.innerHTML = dataHtml;

}

function getDatabyId(id, data) {
    return data.find((item) => {
        return item.id == id
    })
}

function getCurrentUrl() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    let pageName = window.location.pathname.split('/').pop();

    return {
        id: id,
        pageName: pageName
    }
}

function generateInnerPage(a) {
    console.log(a);
}

function search(searchTerm, key, data) {
    searchTerm = searchTerm.toLowerCase();
    const filteredData = data.filter((item) => {
        const currentItemValue = item[key].toLowerCase();
        return currentItemValue.includes(searchTerm);
    })
    return filteredData;
}

window.onload = function () {
    let pageTheme = localStorage.getItem('theme');
    if (pageTheme == 'dark') {
        body.classList.add('dark')
        theme.checked = true;
    }
    else {
        body.classList.remove('dark')
    }
}

if (page.pageName == 'index.html') {
    getData(data)


    function deleteJob (id){
        event.preventDefault();

        // let jobIndex = data.findIndex((item)=> item.id == id);

        // if(jobIndex !== -1){
        //     beforeData = [...data];
        //     beforeData.splice(jobIndex,1)

        //     localStorage.setItem('jobsData',JSON.stringify(beforeData))
        //     getData(beforeData)
        // }



        let newData = data.filter(item=> item.id != id);

        console.log(data);

        console.log(newData);

        getData(newData);
        localStorage.setItem('jobsData',JSON.stringify(newData));

    }
}

if (page.pageName == 'edit.html' || page.pageName == 'edit') {

    let editData = getDatabyId(page.id, data);

    // show input value

    addJobId.value = editData.id
    addJobTitle.value = editData.title,
    addImgUrl.value = editData.img
    addWorkType.value = editData.workType;
    addJobCompany.value = editData.company;
    addJobLocation.value = editData.location;

    //Edit 

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newData = {
            id: addJobId.value,
            title: addJobTitle.value,
            img: addImgUrl.value,
            time: '5h ago',
            workType: addWorkType.value,
            company: addJobCompany.value,
            location: addJobLocation.value
        }

        let updateData = data.map(item => {
            if (item.id == page.id) {
                return {
                    ...item,
                    ...newData
                }
            }
            else {
                return item;
            }
        })

        console.log(updateData);

        localStorage.setItem('jobsData',JSON.stringify(updateData))

        alert('Data Editded');

        window.location.href='/index.html'
        

    })
}

function checkEmptyFields(data,requiredFields) {
    const emptyFields = [];
  
    for (const field of requiredFields) {
      if (!data[field]) {
        emptyFields.push(field);
      }
    }
  
    return emptyFields;
}

if(page.pageName == 'add.html' || page.pageName == 'add'){
    

    addJobId.addEventListener('change',(e)=>{

        if(getDatabyId(e.target.value,data)){
            alert("Bu Id mövcuddur");
            addJobBtn.disabled = true;
        }
        else{
            addJobBtn.disabled = false;
        }   
        
    
    })

    addForm?.addEventListener('submit', (e) => {

    e.preventDefault();

    const newData = {
        id: addJobId.value,
        title: addJobTitle.value,
        img: addImgUrl.value,
        time: '5h ago',
        workType: addWorkType.value,
        company: addJobCompany.value,
        location: addJobLocation.value
    }

    console.log(data);

    const requiredFields = ['id', 'title','time','location','company'];

    const emptyFields = checkEmptyFields(newData,requiredFields);

    if (emptyFields.length > 0) {
      alert(`Bu xanaları doldurun: ${emptyFields.join(', ')}`);
    } else {
        data.push(newData);
        localStorage.setItem('jobsData', JSON.stringify(data))
        alert('added data')
        window.location.href = "/index.html";
    }
})
}




theme?.addEventListener('click', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.setItem('theme', 'light')
    }

    body.classList.toggle('dark');
})

searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    result = search(jobsTitle.value, 'title', data);//4
    result = search(jobsLocation.value, 'location', result)//2

    if (jobsType.checked) {
        result = search('Full Time', 'workType', result)//1
    }
    result.length <= 0 ? jobsBlock.innerHTML = '<p class="empty-job">No Result...</p>' : getData(result);
})