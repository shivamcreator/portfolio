let about=document.querySelector('.about-text');
let project=document.querySelector('.projectText');
let dash= document.querySelector('.small-dash');
let dash2= document.querySelectorAll('.small-dash')[1];
let nav = document.querySelector('.upper-nav');
let fix= nav.offsetTop;
let image= document.querySelector('.Image');
let homeGlow= document.querySelector('.homeGlow');
let aboutGlow= document.querySelector('.aboutGlow');
let projectsGlow= document.querySelector('.projectsGlow');
let profilesGlow= document.querySelector('.profilesGlow');
let contactGlow= document.querySelector('.contactGlow');
let startContact =document.querySelector('.startContact');
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
let h4 = document.querySelector('.h4');
let p1 = document.querySelector('.progress1');
let p2 = document.querySelector('.progress2');
let p3 = document.querySelector('.progress3');
let p4 = document.querySelector('.progress4');
let p5 = document.querySelector('.progress5');
let p6 = document.querySelector('.progress6');
let p7 = document.querySelector('.progress7');
let p8 = document.querySelector('.progress8');
let aboutheading1 = document.querySelectorAll('.about-heading')[0];
let aboutheading2 = document.querySelectorAll('.about-heading')[1];
let aboutheading3 = document.querySelectorAll('.about-heading')[2];
let aboutheading4 = document.querySelectorAll('.about-heading')[3];
let ap1= document.querySelector('.ap1');
let ap2= document.querySelector('.ap2');
let ap3= document.querySelector('.ap3');
let ap4= document.querySelector('.ap4');
let progressDiv = document.querySelector('.progress-div');
window.onscroll = function() {mf()};
if (document.documentElement.scrollTop>=0) {
  homeGlow.style.color="#1a1c20";
}
function mf() {
  if (document.documentElement.scrollTop>=0) {
    homeGlow.style.color="#1a1c20";
    aboutGlow.style.color="white";
  }

  if (document.documentElement.scrollTop>=320) {
    about.classList.add("for-all");

  }if (document.documentElement.scrollTop>=370) {
    dash.classList.add("for-all");
  }
  if(document.documentElement.scrollTop>=500){
    h1.classList.add("for-all1");
    h2.classList.add("for-all1");
    h3.classList.add("for-all1");
    h4.classList.add("for-all1");``
  }

    if(document.documentElement.scrollTop>=600){
    aboutheading1.classList.add("for-all2");
    aboutheading2.classList.add("for-all2");
    aboutheading3.classList.add("for-all2");
    aboutheading4.classList.add("for-all2");
    ap1.classList.add("for-all2");
    ap2.classList.add("for-all2");
    ap3.classList.add("for-all2");
    ap4.classList.add("for-all2");
  }if(document.documentElement.scrollTop>=650){
        homeGlow.style.color="white";
        aboutGlow.style.color="#1a1c20";
        projectsGlow.style.color="white";
}
        if(document.documentElement.scrollTop>=750){
          image.classList.add("for-all");
    progressDiv.classList.add("for-all3");
    setTimeout(load,750);
    setTimeout(load2,850);
    setTimeout(load3,950);
    setTimeout(load4,1050);
    setTimeout(load5,1150);
    setTimeout(load6,1250);
    setTimeout(load7,1350);
    setTimeout(load8,1450);
  }
  if(document.documentElement.scrollTop>=1150){
    project.classList.add("for-all3");
  }if (document.documentElement.scrollTop>=1300) {
    dash2.classList.add("for-all3");
  }
  if (document.documentElement.scrollTop>=1500) {
      aboutGlow.style.color="white";
       projectsGlow.style.color="#1a1c20";
  }
  if(window.pageYOffset > fix){
    nav.classList.add("fix");
  }else{
    nav.classList.remove("fix");
  }
}
function load8() {
 p8.style.width = (450*55)/100 + 'px';
}
function load() {
 p1.style.width = (450*90)/100 + 'px';
}
function load2() {
 p2.style.width = (450*80)/100 + 'px';
}
function load3() {
 p3.style.width = (450*70)/100 + 'px';
}
function load4() {
 p4.style.width = (450*70)/100 + 'px';
}
function load5() {
 p5.style.width = (450*50)/100 + 'px';
}
function load6() {
 p6.style.width = (450*65)/100 + 'px';
}
function load7() {
 p7.style.width = (450*40)/100 + 'px';
}

startContact.addEventListener("mouseover",function () {
  startContact.style.backgroundColor=  "#99f3bd";
 startContact.style.color=  "#1a1c20";
});
startContact.addEventListener("mouseout",function () {
  startContact.style.backgroundColor=  "#1a1c20";
 startContact.style.color=  "#99f3bd";
});
