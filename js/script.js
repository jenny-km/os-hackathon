

window.addEventListener('scroll', headerSticky);


// Get the header
var header = document.getElementById("top-nav");
var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var mobileMenu =  document.querySelector('#menu-primary-menu');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerSticky() {
    console.log(sticky);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mobileMenuIcon.classList.add("sticky-mobile-icon");
    mobileMenu.classList.add("sticky-mobile-menu");
    console.log("hey");
  } else {
    header.classList.remove("sticky");
    mobileMenuIcon.classList.remove("sticky-mobile-icon");
    mobileMenu.classList.remove("sticky-mobile-menu");
  }
}

// for the mobile menu
const headerSlide = () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu =  document.querySelector('#menu-primary-menu');
    const mobileMenuLinks = document.querySelectorAll('#menu-primary-menu li');
    const fontAwesomeIcon = document.querySelector('.fas');

    mobileMenuIcon.addEventListener('click',()=>{
        mobileMenu.classList.toggle('mobile-menu-active');

        // animate links
        mobileMenuLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
                fontAwesomeIcon.classList.remove("fa-times");
                fontAwesomeIcon.classList.add("fa-bars");
            }else{
                link.style.animation = `mobileMenuFade 0.5s ease forwards ${index/7 + 0.2}s`;
                fontAwesomeIcon.classList.remove("fa-bars");
                fontAwesomeIcon.classList.add("fa-times");
            }
        });

    });



}

headerSlide();

window.addEventListener('scroll', arrowDown);
// When the user scrolls the page, execute myFunction

// Get the header
var arrowDown = document.getElementById("arrow-down");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function arrowDown() {
  if (window.pageYOffset > sticky) {
    arrowDown.classList.add("hide");
  } else {
    arrowDown.classList.remove("hide");
  }
}

window.addEventListener('scroll', colorChangeOnScroll);
// Get the offset position
function colorChangeOnScroll() {
    var width = window.innerWidth;
    var bodyWrapper = document.getElementById("body-wrapper");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // double check if I really need a mobile one

        var sectionOne = document.getElementById("section-one-desktop");
        var sectionTwo = document.getElementById("section-two-desktop");
        var sectionThree = document.getElementById("section-three-desktop");

    var sectionOneScrollPosition = sectionOne.offsetTop - 700;
    var sectionTwoScrollPosition = sectionTwo.offsetTop - 400;
    var sectionThreeScrollPosition = sectionThree.offsetTop - 400;
    //console.log(sectionOneScrollPosition);
    console.log(scrollPosition);
    
    if(scrollPosition < sectionOneScrollPosition){
        console.log("hello");
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-lightBlue");

    }else if(scrollPosition > sectionOneScrollPosition && scrollPosition < sectionTwoScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-lightBlue");

    }else if(scrollPosition > sectionTwoScrollPosition && scrollPosition < sectionThreeScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-transparent");

    }else if(scrollPosition > sectionThreeScrollPosition){
        // remove any class with the color-
        bodyWrapper.classList.forEach(item=>{
            if(item.startsWith('color')) {
                bodyWrapper.classList.remove(item);
            }
        });
        bodyWrapper.classList.add("color-black");

    }
  
}