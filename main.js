//opening and closing of nav menu on mobile view
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navigation = document.querySelector('.navigation-menu');
const links = document.querySelector('.navigation-menu__list');
const navLinkAbout = document.querySelector('#navlink1');
const navLinkServices = document.querySelector('#navlink2');
const navLinkContact = document.querySelector('#navlink3');
let width = window.innerWidth;
function openClose(){
    if(menuOpen === false){
        navigation.style.width = '45vw';
        links.style.marginLeft = "0px"
        menuOpen = true;
        window.addEventListener('scroll', noScroll);

    }else{
        navigation.style.width = '0vw';
        links.style.marginLeft = '-240px'
        menuOpen = false;
        window.removeEventListener('scroll', noScroll);
    }
};

function removeScroll(){
    window.removeEventListener('scroll', noScroll);
    navigation.style.width = '0vw';
        menuOpen = false;
        if(width< 960){
        links.style.marginLeft = "-240px";
        }
    }
menuBtn.addEventListener('click',openClose);
//prevent scrolling when open
function noScroll() {
    window.scrollTo(0, 0);
  };
  navLinkAbout.addEventListener('click',removeScroll);
  navLinkServices.addEventListener('click',removeScroll);
  navLinkContact.addEventListener('click',removeScroll);