$(document).ready(function(){

   faireDesRonds();
  $(window).on('resize',function(){
   faireDesRonds();
  });

function faireDesRonds(){
   $('.rond').css('height', $('.rond').innerWidth());
}


});