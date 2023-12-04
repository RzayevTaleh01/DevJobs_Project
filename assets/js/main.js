/* Variables */

const jobsBlock = document.querySelector('.jobs-block');
const theme = document.querySelector('#theme-check');
const body = document.querySelector('body')
const jobsTitle = document.querySelector('#jobs-head');
const jobsLocation = document.querySelector("#jobs-location");
const jobsType = document.querySelector('#jobs-type')
let result = [];



/*

Step 1 Tasks (Current)

- Create Mock Data
- Get Data from mock
- Dynamic Search functionality 
- Dark Mode

*/


window.onload = function () {
    let pageTheme = localStorage.getItem('theme');
    if (pageTheme == 'dark') {
        body.classList.add('dark')
        theme.checked = true;
    }
    else {
        body.classList.remove('dark')
    }
    getData(data);
}

const data = [
    {
        id: '1',
        title: 'Software Engineer',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Part Time',
        company: 'Scoot',
        location: 'Canada'
    },
    {
        id: '2',
        title: 'Senior Software Engineer 1',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Full Time',
        company: 'Scoot',
        location: 'United Kingdom'
    },
    {
        id: '3',
        title: 'Senior Software Engineer 2',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Full Time',
        company: 'Scoot',
        location: 'United Kingdom'
    },
]

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
        </div>
    </div>
        `
    })

    jobsBlock.innerHTML = dataHtml;

}


theme.addEventListener('click', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.setItem('theme', 'light')
    }

    body.classList.toggle('dark');
})



function search(searchTerm, key, data) {
    searchTerm = searchTerm.toLowerCase();
    const filteredData = data.filter((item) => {
        const currentItemValue = item[key].toLowerCase();
        console.log(currentItemValue);
        return currentItemValue.includes(searchTerm);
    })
    return filteredData;
}


jobsTitle?.addEventListener('keyup', (e) => {
    result = search(e.target.value, 'title', data)
    getData(result)
})

jobsLocation?.addEventListener('keyup', (e) => {
    result = search(e.target.value, 'location', data)
    getData(result)
})




jobsType?.addEventListener('click', (e) => {
    if (e.target.checked) {
        result = search('Full Time', 'workType', data);
        getData(result)
    }
    else {
        getData(data)
    }
})
