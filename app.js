$(document).ready(function(){
   $('.btn1').click(function(){
      $('.color h1').css(
          "color",'red'); 
   }); 
    $('.btn2').click(function(){
      $('.color h1').css("background",'yellow'); 
   }); 
    
       $('.btn3').click(function(){
      $('.bg-color h1').css({
         "background":'#333',
          "color":'#fff'
      });
   }); 
    $('.btn4').click(function(){
      $('.slide p').slideDown(2000); 
   });
   
         $('.btn5').click(function(){
      $('.slide p').slideUp(2000); 
   }); 
});