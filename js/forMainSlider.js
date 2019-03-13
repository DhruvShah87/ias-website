var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');
var imagesSlider = ['pic1','pic2','pic3','pic4','pic5'];
var picInfo = ["Networking Session in DA-IICT, 30th April, 2018","Tachyon 2018, 15th-16th September, 2018","Alumni interaction session, 19th January, 2018","IEEE IAS DA-IICT Day, 15th June, 2018","IEEE IAS DA-IICT Day, 15th June, 2018"]
var i = imagesSlider.length;

function nextSlider(){
	if(i<imagesSlider.length){
		i=i+1;
	} else {
		i=1;
	}
	sliderContent.innerHTML = "<img src=" + imagesSlider[i-1] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i-1];
}

function prevSlider(){
	if(i<imagesSlider.length+1 && i>1){
		i--;
	} else {
		i=imagesSlider.length;
	}
	sliderContent.innerHTML = "<img src=" + imagesSlider[i-1] + ".jpeg>";
	imageInfo.innerHTML = picInfo[i-1] ;
}
