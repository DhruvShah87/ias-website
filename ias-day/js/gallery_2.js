"use strict";
$(document).ready(function() {

  var rows = 3; //change this also in css
  var cols = 4; //change this also in css
  var staggerTime = 150;

  var urls = [
	"images/g13.jpeg",
	"images/g14.jpeg",
	"images/g15.jpeg",
	"images/g16.jpeg",
	"images/g17.jpeg",
	"images/g18.jpeg",
	"images/g19.jpeg",
	"images/g20.jpeg",
	"images/g21.jpeg",
	"images/g22.jpeg",
	"images/g23.jpeg",
	"images/g24.jpeg",
  ];

  var $gallery = $(".demo__gallery_2");
  var $help = $(".demo__help_2");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front_2 demo__part_2 demo__part-${row}-${col}_2" row="${row}" col="${col}"><div class="demo__part-back_2"><div class="demo__part-back-inner_2"></div></div><div class="demo__part-front_2"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }

  var $parts = $(".demo__part_2");
  var $image = $(".demo__part-back-inner_2");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front_2").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front_2", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      $help.html("Click any of the tiles to get back");
      help = false;
    }

    let row = +$(this).closest(".demo__part_2").attr("row");
    let col = +$(this).closest(".demo__part_2").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back_2", function() {
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
    $parts.eq(i).addClass("show-front_2");
    
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
    $(".demo__part-" + rowN + "-" + colN + "_2").removeClass("show-front_2");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});