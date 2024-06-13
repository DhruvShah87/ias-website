
// Rhythm's simple slider */
// Update by Riddhi Mistry

var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');

 var imagesSlider = [
	'galpic5',  
	'galpic4',  
	'galpic2',  
	'galpic3',  
	'galpic1',  
	'galpic6',  
	'galpic7',  
	'galpic22',  
	'galpic12',  
	'galpic10',   
	'galpic20',  
	'galpic17', 
	'galpic15',  
	'galpic18',  
	'galpic9', 
	'galpic11', 
	'galpic19', 
	'galpic8',  
	'galpic16', 
	'galpic20'  
  ];
  var picInfo = [
	"Where Engineering Leads 2024",                                                
	"Think Tank 2023",                                                             
	"Prof Sreeja Rajendran, Judge of Think Tank 2023",                             
	"Roboclash Team - i.Fest'22",                                                  
	"Battle Between Robots, Roboclash - i.Fest'22",                                
	"Executive Committee 2019",                                                    
	"Organizing Committee, Tachyon 2019, with Dr. Peter Magyar",                   
	"Tachyon 2019",                                                                
	"Industrial visit to Akshayapatra, 27th October, 2018",                        
	"National-level Hackathon during I.Fest 2018",                                 
	"Executive Committee 2018-2019",                                               
	"Introduction to Git and GitHub workshop, 4th April, 2018",                    
	"IAS Day, 15th June, 2018",                                                    
	"Ms. Neelanshi Varia, Ex-Chairperson of IEEE IAS DA-IICT SBC, with Ms. Megha Tak",
	"Interaction with the alumni",                                                 
	"Visit to Punsari Village, one of India's smartest villages, 14th August, 2016",
	"TIC TECH TOE Hackathon, 21st-23rd October, 2016",                             
	"IEEE Summer School, 2017",                                                    
	"Communication skills development workshop, 10th-11th April, 2017",            
	"With Dr. Anil K. Roy, the Faculty Mentor of IEEE IAS DA-IICT SBC"             
  ];  
var i = 0;

function nextSlider(){
	if(i<imagesSlider.length-1){
		i=i+1;
	} else {
		i=0;
	}
	sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg>";
	if(i==2){
		sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg" + " style='width: 50%;'>";
	}
	imageInfo.innerHTML = picInfo[i];
}

function prevSlider(){
	if(i<imagesSlider.length && i>0){
		i--;
	} else {
		i=imagesSlider.length-1;
	}
	sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg>";
	if(i==2){
		sliderContent.innerHTML = "<img src=galleryphotos/" + imagesSlider[i] + ".jpeg" + " style='width: 50%;'>";
	}
	imageInfo.innerHTML = picInfo[i] ;
}
