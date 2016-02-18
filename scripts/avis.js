var tableau = ["images/avis4.jpg","images/avis2.jpg","images/avis3.jpg","images/avis1.jpg","images/avis5.jpg","images/avis6.jpg","images/avis7.jpg"];
var i=0;
var avisScreen = document.querySelector(".avisScreen");

function changeReaction() {
  i++;
  if(i>6)i=0;
  avisScreen.setAttribute("src",tableau[i]);
}
                          
setInterval(changeReaction,3000);


