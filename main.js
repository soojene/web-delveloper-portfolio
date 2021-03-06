'use strict'

const body = document.querySelector("body");
const menuBar = document.querySelector(".firstSection");
const menuitems = document.querySelector('.menuBar-menu');

// function disappearingMenu () {
//     const menuBarHeight = menuBar.getBoundingClientRect().height;
//     if (window.scrollY > menuBarHeight){
//         menuBar.classList.add('menu--transparent');
//     } else {
//         menuBar.classList.remove('menu--transparent');
//     }
// };
// let lastScroll = 0;
// document.addEventListener("scroll",() => {
//     // disappearingMenu();
//     if(window.innerWidth <= 875){
//         let scrollY = window.pageYOffset || document.documentElement.scrollTop; 
//         scrollY <= lastScroll ? 
//         menuBar.classList.remove('menu--transparent')
//         : menuBar.classList.add('menu--transparent');

//     lastScroll = scrollY <= 0 ? 0 : scrollY; ;
//     }
// });

// handle scrolling when click menu

function handleMenuItems(e) {
    const menuName = e.target.dataset.name;
    // const target = e.target;
    if (menuName == null){
        return;
    }
    const moveToContent = document.querySelector(menuName);
    moveToContent.scrollIntoView({ behavior: 'smooth'});
}

if (menuitems){
    menuitems.addEventListener("click",handleMenuItems);
};

//handle first mainBox opacity when scrolling 
const aboutMeContents = document.querySelector(".mainContent__aboutMeBox");
const aboutMeBoxHeight = aboutMeContents.getBoundingClientRect().height;

//header animation by scrolling
const firstContent = document.querySelector("#AboutMe")
const firstContentBottom =firstContent.getBoundingClientRect().bottom;
const headerBox = document.querySelector("#headerBox");

function headerHandler(){
    if(window.pageYOffset < firstContentBottom && window.innerWidth > 875){
        headerBox.classList.add("noHeader");
    }else if (window.innerWidth < 875 || window.pageYOffset > firstContentBottom){
        headerBox.classList.remove("noHeader");

    }
}
if(window.innerWidth > 875){
    headerBox.classList.add("noHeader");
}
if (aboutMeContents) {
    document.addEventListener('scroll', () => {
        let aboutMeopacity = 1-window.pageYOffset/aboutMeBoxHeight;
        aboutMeContents.style.opacity = aboutMeopacity;
        headerHandler();
    })
    window.addEventListener("resize", headerHandler);
};




// arrow up button showing up when scolling down
const arrowUpBtn = document.querySelector(".arrowUp");
if (arrowUpBtn){
    document.addEventListener('scroll', () => {
        if(window.pageYOffset > aboutMeBoxHeight)  {
            arrowUpBtn.classList.add('showing');
        } else {
            arrowUpBtn.classList.remove('showing');
        }
    })

    arrowUpBtn.addEventListener("click", () => {
        body.scrollIntoView({ behavior: 'smooth'});
    })
}

// filtering project imgs when click project menu

const projectMenuBtn = document.querySelector(".projects__menuBox");
const projectsBox = document.querySelector(".projects__itemBox");
const projets = document.querySelectorAll(".projects__items");

if(projectMenuBtn){
    projectMenuBtn.addEventListener("click", (e) => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if (filter == null) {
            return;
        }

        projectsBox.classList.add("anima");

        setTimeout(() => {
            projets.forEach((tomato) => {
                if(filter !== tomato.dataset.type){
                    tomato.classList.add("invisible");
                } else {
                    tomato.classList.remove("invisible");
                }
            });
            
            projectsBox.classList.remove("anima");

        }, 300);
    })
};