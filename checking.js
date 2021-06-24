// console.log(window.innerWidth);

window.onscroll = function(e) {
    //console.log(this.oldScroll > this.scrollY); //print "false" if direction is down and "true" if up
    // console.log(`Y:${this.scrollY}`);
    if(window.innerWidth <= 875 && this.lastScroll > this.scrollY){
        menuBar.classList.remove('menu--transparent');
    } else if (window.innerWidth <= 875 && this.lastScroll < this.scrollY){
        menuBar.classList.add('menu--transparent');
    }
    // console.log(`old:${window.lastScroll}`);
    this.lastScroll = this.scrollY;
  }
