import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

import '../scss/reset.scss';
import '../scss/base.scss';
import '../scss/media_small.scss';
import '../scss/media_middle.scss';
import '../scss/media_large.scss';
import '../scss/media_extraLarge.scss';

const $win = $(window);


window.addEventListener('DOMContentLoaded', function () {
    // 初期化処理（こちらの方が早いかも）
    console.log("DOMContentLoaded");
    
})

window.addEventListener('load', ()=> {
    document.querySelector("body").classList.remove("preload");
})

// $win.scroll(function() {
//     if (Number($(this).scrollTop()) >= 100){
//         $(".middle-header").addClass("active");
//     } else {
//         $(".middle-header").removeClass("active");
//     }
// });

// $('.middle-header-icon-area #icon-event').click(function(){
//     console.log("click image");
//     $("body").toggleClass("open");
// });

$("#start-button").click(function() {
    console.log("click start button");
})

document.querySelector(".menu-trigger").onclick = ()=> {
    console.log("click");
    Array.prototype.forEach.call(document.getElementsByTagName("header"), (element) => {
        element.classList.toggle("open");
    })
    Array.prototype.forEach.call(document.querySelectorAll(".menu-trigger"), (element) => {
        element.classList.toggle("active");
    })
    // document.querySelector(".menu-trigger")[0].classList.toggle("active");
    
    // document.getElementsByTagName("header")[0].classList.toggle("open");
};