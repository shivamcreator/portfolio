let about=document.querySelector('.about-text');
let dash= document.querySelector('.small-dash');
let nav = document.querySelector('.upper-nav');
let fix= nav.offsetTop;
window.onscroll = function() {mf()};

function mf() {
  if (document.documentElement.scrollTop>=180) {
    about.classList.add("for-all");

  }if (document.documentElement.scrollTop>=220) {
    dash.classList.add("for-all");
  }
  if(window.pageYOffset > fix){
    nav.classList.add("fix");
  }else{
    nav.classList.remove("fix");
  }
}
