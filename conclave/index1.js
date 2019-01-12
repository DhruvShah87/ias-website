var splash=document.querySelector('.typingSplash');
var postSplash=document.querySelector('#wrapper');
var introHeading=document.querySelector('.introHeading');
var splashMessage=document.querySelector('.splashMessage');
var anim2=document.querySelector('.anim2');
var anim3=document.querySelector('.anim3');
var anim4=document.querySelector('.anim4');

splash.addEventListener('click', function(){
  introHeading.style.display='none';
  anim2.style.display='none';
  anim3.style.display='none';
  anim4.style.display='none';
  splashMessage.style.display='none';
  splash.classList.add('splashFade');
  setTimeout(myFunc,1000);
  //splash.style.display="none";
  //postSplash.style.display="block";
});

function myFunc(){
  splash.style.display='none';
  postSplash.style.display='block';
}
