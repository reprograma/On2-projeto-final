$(document).ready( function(){
  if ($(window).width() >= 1024) {
    function switchElements($ele1, $ele2) {
      $ele1.before($ele2);
    }
    let $ele1 = $('#image-f7'),
      $ele2 = $('#panel-f7');

  switchElements($ele1, $ele2);
  }
});

function big(x) {
  document.getElementById("titulo-kathe").textContent = " 'Faça o seu melhor, mas goste do que faz, então você fará o seu melhor.'";
  x.style.background = "black";
  x.style.color = "#ffff";
  x.style.fontFamily = "'Roboto Slab', Arial, Helvetica, sans-serif";

}

function normal(x) {
  document.getElementById("titulo-kathe").textContent = " 'Do your best, but like it, and then you will do your best'";
  x.style.background = "#ffff";
  x.style.color = "darkblue";
  x.style.fontFamily = "'Roboto Slab', Arial, Helvetica, sans-serif";

}

function cit(x){
  document.getElementById("naca").textContent = " 'We wrote our own textbook, because there was no other text about space. We just started from what we knew. We had to go back to geometry and figure all of this stuff out. Inasmuch as I was in at the beginning, I was one of those lucky people.'";
  x.style.background = "black";
  x.style.color = "#ffff";
  x.style.fontSize = "24px";

}

function normal2(x){
  document.getElementById("naca").textContent = "Após sua formatura, em 1938, Katherine trabalhou como professora de matemática, francês e música em uma escola pública em Virginia até meados de 1952. Mas seu grande sonho sempre foi ser uma pesquisadora, então em 1953 foi aceita como funcionária na NACA (antecessora da NASA) como matemática do Departamento de Navegação e Orientação.";
  x.style.background = "#ffff";
  x.style.color = "gray";
  x.style.fontSize = "14px";
}

function autora1(x){
  document.getElementById("eu").textContent = "{Clique para saber um pouco mais sobre mim} ";
  x.style.background = "#ffff";
  x.style.color = "blue";
  x.style.fontSize = "14px";

}

function autora2(x){
  document.getElementById("eu").textContent = "{Autora: Tereza Letícia}";
  x.style.background = "#ffff";
  x.style.color = "blue";
  x.style.fontSize = "14px";
}
