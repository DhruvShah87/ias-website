var btn=document.querySelector('.menu');
var topNavyblueDiv=document.querySelector('.topNavyblueDiv');
var r=0;

function hideOrShow(){
  if(r===0){
    topNavyblueDiv.style.display='block';
    r=1;
  } else {
    r=0;
    topNavyblueDiv.style.display='none';
  }
}

let topBar1 = document.querySelector('#topBar1');
let middleBar1 = document.querySelector('#middleBar1');
let bottomBar1 = document.querySelector('#bottomBar1');

let topBar2 = document.querySelector('#topBar2');
let middleBar2 = document.querySelector('#middleBar2');
let bottomBar2 = document.querySelector('#bottomBar2');

let openOverlay = document.querySelector('.openOverlay');
let overlay = document.querySelector('.overlay');

let overlayNav1 = document.querySelector('.overlayNav1');
let overlayNav2 = document.querySelector('.overlayNav2');
let overlayNav3 = document.querySelector('.overlayNav3');
let overlayNav4 = document.querySelector('.overlayNav4');
let overlayNav5 = document.querySelector('.overlayNav5');
let menufl=false; // If menufl===false, then the user is in the main page, if it is true, then the user is inside the overlay menu

function openOverlayClicked(){
  if(!menufl){    // Go inside the overlay menu
    menufl=true;



    topBar1.classList.remove('animateOutTopBar1');
    topBar1.classList.add('animateTopBar1');
    middleBar1.classList.remove('animateOutMiddleBar1');
    middleBar1.classList.add('animateMiddleBar1');
    bottomBar1.classList.remove('animateOutBottomBar1');
    bottomBar1.classList.add('animateBottomBar1');



    overlay.classList.remove('overlaySlideUp');
    overlay.classList.add('overlaySlideDown');

    overlayNav1.classList.remove('slideInNavItemReverse');
    overlayNav1.classList.add('slideInNavItem');

    overlayNav2.classList.remove('slideInNavItemReverse1');
    overlayNav2.classList.add('slideInNavItemDelay1');

    overlayNav3.classList.remove('slideInNavItemReverse2');
    overlayNav3.classList.add('slideInNavItemDelay2');

    overlayNav4.classList.remove('slideInNavItemReverse3');
    overlayNav4.classList.add('slideInNavItemDelay3');

    overlayNav5.classList.remove('slideInNavItemReverse4');
    overlayNav5.classList.add('slideInNavItemDelay4');






  } else {        // Go to the main page
    menufl=false;


    topBar1.classList.remove('animateTopBar1');
    topBar1.classList.add('animateOutTopBar1');
    middleBar1.classList.remove('animateMiddleBar1');
    middleBar1.classList.add('animateOutMiddleBar1');
    bottomBar1.classList.remove('animateBottomBar1');
    bottomBar1.classList.add('animateOutBottomBar1');



    overlay.classList.remove('overlaySlideDown');
    overlay.classList.add('overlaySlideUp');

    overlayNav1.classList.remove('slideInNavItem');
    overlayNav1.classList.add('slideInNavItemReverse');

    overlayNav2.classList.remove('slideInNavItemDelay1');
    overlayNav2.classList.add('slideInNavItemReverse1');

    overlayNav3.classList.remove('slideInNavItemDelay2');
    overlayNav3.classList.add('slideInNavItemReverse2');

    overlayNav4.classList.remove('slideInNavItemDelay3');
    overlayNav4.classList.add('slideInNavItemReverse3');

    overlayNav5.classList.remove('slideInNavItemDelay4');
    overlayNav5.classList.add('slideInNavItemReverse4');
  }
}




openOverlay.addEventListener('click', openOverlayClicked);
