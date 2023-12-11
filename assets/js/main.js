/* Variables */

const jobsBlock = document.querySelector('.jobs-block');
const theme = document.querySelector('#theme-check');
const body = document.querySelector('body')
const jobsTitle = document.querySelector('#jobs-head');
const jobsLocation = document.querySelector("#jobs-location");
const jobsType = document.querySelector('#jobs-type');

const searchForm = document.querySelector('#search_form');

let result = [];


/*

Step 3 Tasks (Current)

- Find Page Data 
- Add Data 
- Update Data

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
        company: 'Scoot',//data[0].company
        location: 'Canada',
        innerData: {
            jobLogo: '/assets/img/company-logo.svg',
            jobUrl: 'scoot.com',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
            requirement: {
                info: 'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.',
                list: [
                    {
                        id: 1,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 2,
                        text: 'Sunt fuga repellendus incidunt modi.'
                    },
                    {
                        id: 3,
                        text: 'Accusantium rem mollitia laudantium magnam.'
                    },
                    {
                        id: 4,
                        text: 'Quis harum debitis sunt fugit.'
                    }

                ]
            },

            whatYouWillDo: {
                info: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
                list: [
                    {
                        id: 1,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 2,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 3,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 4,
                        text: 'Lorem ipsum dolor sit amet.'
                    }
                ]
            }
        }
    },
    {
        id: '2',
        title: 'Senior Software Engineer 1',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Part Time',
        company: 'Scoot',
        location: 'Canada',
        innerData: {
            jobLogo: '/assets/img/company-logo.svg',
            jobUrl: 'scoot.com',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
            requirement: {
                info: 'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.',
                list: [
                    {
                        id: 1,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 2,
                        text: 'Sunt fuga repellendus incidunt modi.'
                    },
                    {
                        id: 3,
                        text: 'Accusantium rem mollitia laudantium magnam.'
                    },
                    {
                        id: 4,
                        text: 'Quis harum debitis sunt fugit.'
                    }

                ]
            },

            whatYouWillDo: {
                info: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
                list: [
                    {
                        id: 1,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 2,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 3,
                        text: 'Lorem ipsum dolor sit amet.'
                    },
                    {
                        id: 4,
                        text: 'Lorem ipsum dolor sit amet.'
                    }
                ]
            }
        }
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
    {
        id: '13',
        title: 'Senior Software Engineer 2',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Full Time',
        company: 'Scoot',
        location: 'United Kingdom'
    },
    {
        id: '113',
        title: 'Senior Software Engineer 2',
        img: './assets/img/jobs-1.svg',
        time: '5h ago',
        workType: 'Full Time',
        company: 'Scoot',
        location: 'United Kingdom'
    },
]

let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('id');//113

console.log(id);


let findById = data.find((item)=>{
    return item.id==id;
})

generateInnerPage(findById)



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

function generateInnerPage(a){
    console.log(a);
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
        return currentItemValue.includes(searchTerm);
    })
    return filteredData;
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    result = search(jobsTitle.value, 'title', data);//4
    result = search(jobsLocation.value, 'location', result)//2

    if (jobsType.checked) {
        result = search('Full Time', 'workType', result)//1
    }
    result.length <= 0 ? jobsBlock.innerHTML = '<p class="empty-job">No Result...</p>' : getData(result);
})


