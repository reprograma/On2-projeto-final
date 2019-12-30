
$(function () {

    $(".conjuntoDeCards").hide()
    $(".sobreAutora_container").hide()
    $(".escolha_container").hide()
    $(".fontes_container").hide()


    $(".intro-card-btn").click(function(){
        $(".conjuntoDeCards").toggle("slow")

    })

    $(".sobreAutora_titulo").click(function(){
      $(".sobreAutora_container").toggle("slow")

    })

    $(".escolha_titulo").click(function(){
      $(".escolha_container").toggle("slow")

    })

    $(".fontes_titulo").click(function(){
      $(".fontes_container").toggle("slow")

  })

});

$('.texto-card').mouseover(function () {

  $('.titulo-card').css('background', '#FFC0CB');
  
});

let escolha = document.querySelector(".escolha-texto")
   escolha.addEventListener('mousemove', function personalizar(event) {

       escolha.style.color = "whitesmoke"

       escolha.style.background = "#9160b4"

       escolha.style.fontSize = "15px"

       escolha.style.textShadow ="0px 0px 8px magenta,0px 0px 8px orange"
  });
