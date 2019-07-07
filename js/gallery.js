
// Rhythm's simple slider */

var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');
var imagesSlider = ['galpic1','galpic2','galpic3','galpic4','galpic5','galpic6','galpic7','galpic8','galpic9','galpic10','galpic11','galpic12','galpic13','galpic14','galpic15','galpic16','galpic17'];
var picInfo = ["Executive Committee 2019","Organizing Committee, Tachyon 2019, with Dr. Peter Magyar","IEEE Summer School, 2017","Ms. Megha Tak, the founder of IEEE IAS DA-IICT SBC, during the alumni interaction session, 19th January, 2018 ","Interaction with the alumni","National-level Hackathon during I.Fest 2018","Visit to Punsari Village, one of India's smartest villages, 14th August, 2016","Industrial visit to Akshayapatra, 27th October, 2018","Tachyon 2018","IAS Day, 15th June, 2018","Communication skills development workshop, 10th-11th April, 2017","Introduction to Git and GitHub workshop, 4th April, 2018","Ms. Neelanshi Varia, Ex-Chairperson of IEEE IAS DA-IICT SBC, with Ms. Megha Tak","TIC TECH TOE Hackathon, 21st-23rd October, 2016 ","With Dr. Anil K. Roy, the Faculty Mentor of IEEE IAS DA-IICT SBC","Executive Committee 2018-2019", "Tachyon 2019"]
var i = 0;

function nextSlider(){
	if(i<imagesSlider.length-1){
		i=i+1;
	} else {
		i=0;
	}
	sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i];
}

function prevSlider(){
	if(i<imagesSlider.length && i>0){
		i--;
	} else {
		i=imagesSlider.length-1;
	}
	sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i] ;
}
