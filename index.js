let about=document.querySelector('.about-text');
setInterval(mf,100);

function mf() {
  if (document.documentElement.scrollTop>=110) {
    about.classList.add("for-all");
  }
}
