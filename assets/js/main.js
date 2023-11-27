const jobsBlock = document.querySelector(".jobs-block");
const jobsHead = document.querySelector("#jobs-head");
const jobsLocation = document.querySelector("#jobs-location");
const jobsType = document.querySelector("#jobs-type");
const theme = document.querySelector("#theme-check");
const body = document.querySelector("body");




const data = [
    {
        id: 1,
        img: './assets/img/jobs-1.svg',
        time: '20h ago',
        time_type: 'Full Time',
        head: 'Haskell and PureScript Dev',
        company: 'Blogr',
        location: 'United States'
    },
    {
        id: 2,
        img: './assets/img/jobs-1.svg',
        time: '20h11 ago',
        time_type: 'Full Time',
        head: 'MasterCode',
        company: 'Blogr',
        location: 'demo'
    },
    ,
    {
        id: 2,
        img: './assets/img/jobs-1.svg',
        time: '20h11 ago',
        time_type: 'Part Time',
        head: 'Haske',
        company: 'Blogr',
        location: 'demo'
    }
]
let result = data;


function getCurrentUrl() {
    let urlParams = new URLSearchParams(window.location.search);

    let id = urlParams.get('id');

    let pageName = window.location.pathname.split('/').pop();

    return {
        id: id,
        pageName: pageName
    };
}



window.onload = function () {

    let pageName = getCurrentUrl();
    if (pageName.pageName == 'index.html') {
        getData(data);
    }
    else {
        console.log(pageName);
    }
};

function getData(data) {

    dataHtml = '';

    data.map((item) => {
        dataHtml += `
    <div class="jobs-item">
    <div class="jobs-item_img">
        <img src="${item.img}" alt="">
    </div>
    <div class="jobs-item_body">
        <div class="jobs-item_info">
            <p>${item.time}</p>
            <p>${item.time_type}</p>
        </div>
        <a href="/inner.html?${item.id}" class="jobs-item_head">
            ${item.head}
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

function search(searchTerm, searchBy, data) {
    searchTerm = searchTerm.toLowerCase();

    const filteredData = data.filter(item => {
        const currentItemValue = item[searchBy].toLowerCase();
        return currentItemValue.includes(searchTerm);
    });

    return filteredData;
}


jobsHead.addEventListener('keyup', (e) => {
    result = search(e.target.value, "head", data);
    getData(result)
})


jobsLocation.addEventListener('keyup', (e) => {
    result = search(e.target.value, "location", result);
    getData(result)
})


jobsType.addEventListener('click', (e) => {
    if (e.target.checked) {
        result = search("Full Time", "time_type", result);
        getData(result)
    }
    else {
        getData(data)
    }
})

theme.addEventListener('click', (e) => {
    if (e.target.checked) {
        console.log('dfg');
        body.classList.add('dark')
        localStorage.setItem('theme','dark')
    }
    else {
        body.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
})