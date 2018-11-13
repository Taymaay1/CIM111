$(document).ready(function() {

$(".image").hide();

var hideaway = true;

$(".step1").click(function(){
  if(hideaway == true){
    $(".image1").show();
    hideaway = false;
  }
  else{
    $(".image1").hide();
    hideaway = true;
  }
});

$(".step2").click(function(){
  if(hideaway == true){
    $(".image2").show();
    hideaway = false;
  }
  else{
    $(".image2").hide();
    hideaway = true;
  }
});

$(".heading").mouseenter(function(){
  $(this).css("color", "blue");


});

$(".heading").mouseleave(function(){
  $(this).css("color", "black");




});
});
