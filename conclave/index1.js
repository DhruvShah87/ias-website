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

/*splash.addEventListener('click', function(){
  introHeading.style.display='none';
  anim2.style.display='none';
  anim3.style.display='none';
  anim4.style.display='none';
  splashMessage.style.display='none';
  splash.classList.add('splashFade');
  setTimeout(myFunc,1000);
  //splash.style.display="none";
  //postSplash.style.display="block";
});*/

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








/*function func1(){
  height=window.innerWidth;
  console.log(height);
  anim1.classList.add('animload1');
  anim2.classList.add('animload2');
  anim3.classList.add('animload3');
  anim4.classList.add('animload4');
  splashMessage.classList.add('animload5');
}*/


speakerName1.style.color="#ececec";
speakerName2.style.color="#ececec";
speakerName3.style.color="#ececec";
speakerName4.style.color="#ececec";

speakerC.style.color="#ececec";
speakerD.style.color="#ececec";
speakerE.style.color="#ececec";
speakerF.style.color="#ececec";
speakerG.style.color="#ececec";


// For the gallery slider

var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');
var imagesSlider = ['galpic1','galpic2','galpic3','galpic4','galpic5','galpic6','galpic7','galpic8'];
var picInfo = ["Inaugral of the Conclave","Engaged audience", "Dr. Peter Magyar", "Speech on the impact of IEEE and green power","Sunil Parekh", "Krishnaprasad Shastry","Prof. Sourish Dasgupta", "Organising Committee"]
var i = 0;

function nextSlider(){
	if(i<imagesSlider.length-1){
		i=i+1;
	} else {
		i=0;
	}
	sliderContent.innerHTML = "<img src=sliderPhotos/" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i];
}

function prevSlider(){
	if(i<imagesSlider.length+1 && i>0){
		i--;
	} else {
		i=imagesSlider.length-1;
	}
	sliderContent.innerHTML = "<img src=sliderPhotos/" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i] ;
}
