'use strict'

const menuBar = document.querySelector(".firstSection");

let scrollingScreen;

function showingMenu () {
    const menuBarHeight = menuBar.getBoundingClientRect().height;
    if (window.scrollY > menuBarHeight){
        menuBar.classList.add('menu--transparent');
    } else {
        menuBar.classList.remove('menu--transparent');
    }
};

document.addEventListener("scroll",() => {
    showingMenu();
});