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
