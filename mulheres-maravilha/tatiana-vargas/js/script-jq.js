$(function(){

$(".card-body").hide();

$(".card-img-top").hover(function(){
  $(".card-body").show("slow");

});


$(".card").hover(function(){
  $(this).css("background-color", "#EED5B7");
  }, function(){
  $(this).css("background-color", "white");
});




})
