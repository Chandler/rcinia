alert("hey")
$(function(){ 
  $(".chartbutton").click(function(){
       window.location=$(this).find("a").attr("href");
       return false;
  });

  $('.chartbutton').css('cursor', 'pointer');
});



