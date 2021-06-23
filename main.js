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

document.addEventListener("scroll",() => {
    // disappearingMenu();
    if(window.innerWidth <= 875){
        let scrollY = window.pageYOffset || document.documentElement.scrollTop; 
        scrollY <= this.lastScroll ? 
        menuBar.classList.remove('menu--transparent')
        : menuBar.classList.add('menu--transparent');

    this.lastScroll = scrollY ;
    }
});

// handle scrolling when click menu

function handleMenuItems(e) {
    const menuName = e.target.dataset.name;
    const target = e.target;
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
if (aboutMeContents) {
    document.addEventListener('scroll', () => {
        let aboutMeopacity = 1-window.pageYOffset/aboutMeBoxHeight;
        aboutMeContents.style.opacity = aboutMeopacity;
    })
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
console.log(projectsBox);
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