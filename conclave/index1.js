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
var speakerInfoC=document.querySelector('.speakerInfoC');
var speakerInfoD=document.querySelector('.speakerInfoD');
var speakerInfoE=document.querySelector('.speakerInfoE');
var speakerInfoF=document.querySelector('.speakerInfoF');
var speakerInfoG=document.querySelector('.speakerInfoG');
var speakerA=document.querySelector('.speakerA');
var speakerB=document.querySelector('.speakerB');
var speakerC=document.querySelector('.speakerC');
var speakerD=document.querySelector('.speakerD');
var speakerE=document.querySelector('.speakerE');
var speakerF=document.querySelector('.speakerF');
var speakerG=document.querySelector('.speakerG');

var infoA=document.querySelector('.infoA');
var infoB=document.querySelector('.infoB');
var infoC=document.querySelector('.infoC');
var infoD=document.querySelector('.infoD');
var infoE=document.querySelector('.infoE');
var infoF=document.querySelector('.infoF');
var infoG=document.querySelector('.infoG');

var moreC=document.querySelector('.moreC');
var moreD=document.querySelector('.moreD');
var moreE=document.querySelector('.moreE');
var moreF=document.querySelector('.moreF');
var moreG=document.querySelector('.moreG');

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

var a=false,b=false,c=false,d=false,e=false,f=false,g=false;
var height;


  speakerInfoC.addEventListener('click',function(){
    if(c===false){
      c=true;
      infoC.style.display='none';
      moreC.style.display='block';
    } else {
      c=false;
      infoC.style.display='block';
      moreC.style.display='none';
    }
  });

  speakerInfoD.addEventListener('click',function(){
    console.log('d');
    if(d===false){
      d=true;
      infoD.style.display='none';
      moreD.style.display='block';
    } else {
      d=false;
      infoD.style.display='block';
      moreD.style.display='none';
    }
  });

  speakerInfoE.addEventListener('click',function(){
    if(e===false){
      e=true;
      infoE.style.display='none';
      moreE.style.display='block';
    } else {
      e=false;
      infoE.style.display='block';
      moreE.style.display='none';
    }
  });

  speakerInfoF.addEventListener('click',function(){
    if(f===false){
      f=true;
      infoF.style.display='none';
      moreF.style.display='block';
    } else {
      f=false;
      infoF.style.display='block';
      moreF.style.display='none';
    }
  });

  speakerInfoG.addEventListener('click',function(){
    if(g===false){
      g=true;
      infoG.style.display='none';
      moreG.style.display='block';
    } else {
      g=false;
      infoG.style.display='block';
      moreG.style.display='none';
    }
  });








function func1(){
  height=window.innerWidth;
  console.log(height);
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

speakerA.style.color="#ececec";
speakerB.style.color="#ececec";
speakerC.style.color="#ececec";
speakerD.style.color="#ececec";
speakerE.style.color="#ececec";
speakerF.style.color="#ececec";
speakerG.style.color="#ececec";


function myFunc(){
  splash.style.display='none';
  postSplash.style.display='block';
}

// For Nitendra Sir

// speakerA.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerA.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerB.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerB.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerC.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerC.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerD.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerD.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerE.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerE.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerF.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerF.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });
//
// speakerG.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// });
//
// speakerG.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// });

// For Lall Sir

// speakerName2.addEventListener("mouseover", function(){
//   speakerName2.style.color="orange";
// })
//
// speakerName2.addEventListener("mouseout", function(){
//   speakerName2.style.color="#ececec";
// })
//
// // For KrishnaPrasad Sir
//
// speakerName1.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// })
//
// speakerName1.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// })
//
// // For Sunil Sir
//
// speakerName1.addEventListener("mouseover", function(){
//   speakerName1.style.color="orange";
// })
//
// speakerName1.addEventListener("mouseout", function(){
//   speakerName1.style.color="#ececec";
// })
