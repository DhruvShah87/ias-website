/*"use strict";
$(document).ready(function() {

  var rows = 3; //change this also in css
  var cols = 4; //change this also in css
  var staggerTime = 150;

  var urls = [
    "images/g1.JPG",
    "images/g2.JPG",
    "images/g3.JPG",
    "images/g4.JPG",
    "images/g5.JPG",
    "images/g6.JPG",
    "images/g7.JPG",
    "images/g8.JPG",
    "images/g9.JPG",
    "images/g10.JPG",
    "images/g11.JPG",
    "images/g12.JPG",
  ];

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }

  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      $help.html("Click any of the tiles to get back");
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;

    $help.html(`Check out my other <a target="blank" href="https://codepen.io/kiyutink/">pens</a> and follow me on <a target="_blank" href="https://twitter.com/kiyutin_k">twitter</a>`);

    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);


    showFront(0, $parts.length);

  });

  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");

    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});*/

// Rhythm's simple slider */

var sliderContent = document.getElementById('sliderContent');
var imageInfo = document.getElementById('imageInfo');
var imagesSlider = ['galpic1','galpic2','galpic3','galpic4','galpic5','galpic6','galpic7','galpic8','galpic9','galpic10','galpic11','galpic12','galpic13','galpic14'];
var picInfo = ["IEEE Summer School, 2017","Ms. Megha Tak, the founder of IEEE IAS DA-IICT SBC, during the alumni interaction session, 19th January, 2018 ","Interaction with the alumni","National-level Hackathon during I.Fest 2018","Visit to Punsari Village, one of India's smartest villages, 14th August, 2016","Industrial visit to Akshayapatra, 27th October, 2018","Tachyon 2018","IAS Day, 15th June, 2018","Communication skills development workshop, 10th-11th April, 2017","Introduction to Git and GitHub workshop, 4th April, 2018","Ms. Neelanshi Varia, Ex-Chairperson of IEEE IAS DA-IICT SBC, with Ms. Megha Tak","TIC TAC TOE Hackathon, ","With Dr. Anil K. Roy, the Faculty Mentor of IEEE IAS DA-IICT SBC","Executive Committee 2018-2019"]
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
