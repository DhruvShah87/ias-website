var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');
var imagesSlider = ['pic7','pic8','pic2','pic3','pic4','pic5','pic6','pic1']
var picInfo = [
	"Think Tank, 24th August 2023",
	"Roboclash Team - i.Fest'22",
	"Tachyon 2019, 29th-31st March 2019",
	"Tachyon 2018, 15th-16th September, 2018",//3
	"Alumni interaction session, 19th January, 2018",//4
	"IEEE IAS DA-IICT Day, 15th June, 2018",//5
	"IEEE IAS DA-IICT Day, 15th June, 2018",//6
	"Networking Session in DA-IICT, 30th April, 2018"
]
var i = 0;

function nextSlider(){
	if(i<imagesSlider.length-1){
		i=i+1;
	} else {
		i=0;
	}
	sliderContent.innerHTML = "<img src=" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i];
}

function prevSlider(){
	if(i<imagesSlider.length+1 && i>0){
		i--;
	} else {
		i=imagesSlider.length-1;
	}
	sliderContent.innerHTML = "<img src=" + imagesSlider[i] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i] ;
}
