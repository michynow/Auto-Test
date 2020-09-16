(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//opening and closing of nav menu on mobile view
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let linksOpen = false;
const navigation = document.querySelector('.navigation-menu');
const links = document.querySelector('.navigation-menu__list');
const navLinkAbout = document.querySelector('#navlink1');
const navLinkServices = document.querySelector('#navlink2');
const navLinkContact = document.querySelector('#navlink3');
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
let width = window.outerWidth;
function openClose(){
    if(menuOpen === false){
        navigation.style.width = '55vw';
        links.style.marginLeft = "0px"
        menuOpen = true;
        linksOpen = true;
        
        disableBodyScroll(navigation);
    }else{
        navigation.style.width = '0vw';
        links.style.marginLeft = '-240px'
        menuOpen = false;
        linksOpen = false;
        enableBodyScroll(navigation);
    }
};

function removeScroll(){
    navigation.style.width = '0vw';
        menuOpen = false;
        if(width < 960){
        links.style.marginLeft = "-240px";
        linksOpen = false;
        }
        enableBodyScroll(navigation);
    }
menuBtn.addEventListener('click',openClose);
//prevent scrolling when open
  navLinkAbout.addEventListener('click',removeScroll);
  navLinkServices.addEventListener('click',removeScroll);
  navLinkContact.addEventListener('click',removeScroll);
},{"body-scroll-lock":2}],2:[function(require,module,exports){
!function(e,o){if("function"==typeof define&&define.amd)define(["exports"],o);else if("undefined"!=typeof exports)o(exports);else{var t={};o(t),e.bodyScrollLock=t}}(this,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=!1;if("undefined"!=typeof window){var e={get passive(){t=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}function l(o){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(o))})}function d(e){var o=e||window.event;return!!l(o.target)||(1<o.touches.length||(o.preventDefault&&o.preventDefault(),!1))}function n(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),c=[],a=!1,u=-1,s=void 0,v=void 0;exports.disableBodyScroll=function(r,e){if(r){if(!c.some(function(e){return e.targetElement===r})){var o={targetElement:r,options:e||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}(c),[o]),i?(r.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},r.ontouchmove=function(e){var o,t,n,i;1===e.targetTouches.length&&(t=r,i=(o=e).targetTouches[0].clientY-u,l(o.target)||(t&&0===t.scrollTop&&0<i||(n=t)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?d(o):o.stopPropagation()))},a||(document.addEventListener("touchmove",d,t?{passive:!1}:void 0),a=!0)):function(e){if(void 0===v){var o=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;o&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(e)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},exports.clearAllBodyScrollLocks=function(){i?(c.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),a&&(document.removeEventListener("touchmove",d,t?{passive:!1}:void 0),a=!1),u=-1):n(),c=[]},exports.enableBodyScroll=function(o){o?(c=c.filter(function(e){return e.targetElement!==o}),i?(o.ontouchstart=null,o.ontouchmove=null,a&&0===c.length&&(document.removeEventListener("touchmove",d,t?{passive:!1}:void 0),a=!1)):c.length||n()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}});

},{}]},{},[1]);
