$(document).ready(function(){
  $('.monSlider').slick({
    autoplay:true,
    arrows:false,
    autoplaySpeed: 4000
  });
});

var image1=document.querySelector(".respImg5");
var image2=document.querySelector(".respImg3");
var image3=document.querySelector(".respImg2");
var image4=document.querySelector(".respImg4");
var image5=document.querySelector(".respImg1");
var image6=document.querySelector(".respImg6");

var height = window.innerHeight;
var width = window.innerWidth;

function sizeProperty(){
  height = window.innerHeight;
  width = window.innerWidth;
  console.log(height);
  console.log(width);
  
  if(width<991){
    image1.setAttribute("src","images/S5ms.jpg")
    image2.setAttribute("src","images/S3ms.jpg")
    image3.setAttribute("src","images/S2ms.jpg")
    image4.setAttribute("src","images/S4ms.jpg")
    image5.setAttribute("src","images/S1ms.jpg")
    image6.setAttribute("src","images/S6ms.jpg")
  }
  else{
    image1.setAttribute("src","images/S5bis.jpg")
    image2.setAttribute("src","images/S3bis.jpg")
    image3.setAttribute("src","images/S2bis.jpg")
    image4.setAttribute("src","images/S4bis.jpg")
    image5.setAttribute("src","images/S1bis.jpg")
    image6.setAttribute("src","images/S6bis.jpg")
  }
}

setInterval(sizeProperty, 1000);
