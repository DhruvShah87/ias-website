var splash=document.querySelector('.typingSplash');
var postSplash=document.querySelector('#wrapper');

splash.addEventListener('click', function(){
  splash.classList.add('splashFade');
  //splash.style.display="none";
  postSplash.style.display="block";
});
