let about=document.querySelector('.about-text');
let dash= document.querySelector('.small-dash');
let nav = document.querySelector('.upper-nav');
let fix= nav.offsetTop;
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
let h4 = document.querySelector('.h4');
let aboutheading1 = document.querySelectorAll('.about-heading')[0];
let aboutheading2 = document.querySelectorAll('.about-heading')[1];
let aboutheading3 = document.querySelectorAll('.about-heading')[2];
let aboutheading4 = document.querySelectorAll('.about-heading')[3];
let ap1= document.querySelector('.ap1');
let ap2= document.querySelector('.ap2');
let ap3= document.querySelector('.ap3');
let ap4= document.querySelector('.ap4');
window.onscroll = function() {mf()};

function mf() {
  if (document.documentElement.scrollTop>=320) {
    about.classList.add("for-all");

  }if (document.documentElement.scrollTop>=370) {
    dash.classList.add("for-all");
  }
  if(document.documentElement.scrollTop>=500){
    h1.classList.add("for-all1");
    h2.classList.add("for-all1");
    h3.classList.add("for-all1");
    h4.classList.add("for-all1");}
    if(document.documentElement.scrollTop>=600){
    aboutheading1.classList.add("for-all2");
    aboutheading2.classList.add("for-all2");
    aboutheading3.classList.add("for-all2");
    aboutheading4.classList.add("for-all2");
    ap1.classList.add("for-all2");
    ap2.classList.add("for-all2");
    ap3.classList.add("for-all2");
    ap4.classList.add("for-all2");
  }
  if(window.pageYOffset > fix){
    nav.classList.add("fix");
  }else{
    nav.classList.remove("fix");
  }
}
