
$(function () {
  $(".frase").hover(function () {
    $(this).css("background", "rgb(240, 190, 149)");
  }).mouseleave(function () {
    $(this).css('background', 'white');
  });
});
