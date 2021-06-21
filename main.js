'use strict'

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
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    scrollY <= this.lastScroll 
    ? menuBar.classList.remove('menu--transparent')
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
