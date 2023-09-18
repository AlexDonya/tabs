const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});


// const tabThree = document.getElementById('tabs-three');
// const contentThree = document.getElementById('contents-three');
// console.log(contentThree.children);
// console.log(tabThree.children);

// const changeClassTabThree = el => {
//     for(let i = 0; i < tabThree.children.length; i++) {
//         tabThree.children[i].classList.remove('active');
//     }
//     el.classList.add('active');
// };

// tabThree.addEventListener('click', e => {
//     const currTab = e.target.dataset.btn;
//     console.log(currTab);
//     changeClassTabThree(e.target);
//     for(let i = 0; i < contentThree.children.length; i++) {
//         contentThree.children[i].classList.remove('active');
//         if(contentThree.children[i].dataset.content === currTab) {
//             contentThree.children[i].classList.add('active');
//         }
//     }
// });


const tabThree = document.getElementById('tabs-three');
const contentThree = document.querySelectorAll('.content-three');

const changeClassTabThree = el => {
    for(let i = 0; i < tabThree.children.length; i++) {
        tabThree.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabThree.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    console.log(currTab);
    changeClassTabThree(e.target);
    for(let i = 0; i < contentThree.length; i++) {
        contentThree[i].classList.remove('active');
        if(contentThree[i].dataset.content === currTab) {
            contentThree[i].classList.add('active');
        }
    }
});