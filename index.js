firstLine = document.querySelectorAll('.left')[0];
secondLine = document.querySelectorAll('.right')[0];
thirdLine = document.querySelectorAll('.left')[1];
fourthLine = document.querySelectorAll('.right')[1];

if (screen.width>800) {
  setInterval(left, 1000);
  function left(){
    firstLine.classList.add('leftmove');
    thirdLine.classList.add('leftmove');
    secondLine.classList.add('rightmove');
    fourthLine.classList.add('rightmove');
  }
}
