var splash=document.querySelector('.typingSplash');
var postSplash=document.querySelector('#wrapper');
var introHeading=document.querySelector('.introHeading');
var splashMessage=document.querySelector('.splashMessage');
var anim1=document.querySelector('.anim1');
var anim2=document.querySelector('.anim2');
var anim3=document.querySelector('.anim3');
var anim4=document.querySelector('.anim4');
var speakerName1=document.querySelector('.speakerName1');
var speakerName2=document.querySelector('.speakerName2');
var speakerName3=document.querySelector('.speakerName3');
var speakerName4=document.querySelector('.speakerName4');

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

function func1(){
  anim1.classList.add('animload1');
  anim2.classList.add('animload2');
  anim3.classList.add('animload3');
  anim4.classList.add('animload4');
  splashMessage.classList.add('animload5');
}

window.onload=func1;

speakerName1.style.color="#ececec";
speakerName2.style.color="#ececec";
speakerName3.style.color="#ececec";
speakerName4.style.color="#ececec";


function myFunc(){
  splash.style.display='none';
  postSplash.style.display='block';
}

// For Nitendra Sir

speakerName1.addEventListener("mouseover", function(){
  speakerName1.style.color="orange";
})

speakerName1.addEventListener("mouseout", function(){
  speakerName1.style.color="#ececec";
})

// For Lall Sir

speakerName2.addEventListener("mouseover", function(){
  speakerName2.style.color="orange";
})

speakerName2.addEventListener("mouseout", function(){
  speakerName2.style.color="#ececec";
})

// For KrishnaPrasad Sir

speakerName1.addEventListener("mouseover", function(){
  speakerName1.style.color="orange";
})

speakerName1.addEventListener("mouseout", function(){
  speakerName1.style.color="#ececec";
})

// For Sunil Sir

speakerName1.addEventListener("mouseover", function(){
  speakerName1.style.color="orange";
})

speakerName1.addEventListener("mouseout", function(){
  speakerName1.style.color="#ececec";
})
