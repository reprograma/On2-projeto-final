// NAV e Footer
(function() {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#674582";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "#674582";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});

//Efeito titulo
let posicao = 0;
let mensagem = document.getElementById("principal__titulo");

function rola() {
  document.getElementById("principal__titulo").innerHTML = mensagem.substring(posicao,mensagem,length);
  posicao++;
  if (posicao == mensagem.length) {
    posicao = 0;
  }
  setTimeout("rola()", 130);
}

// Sobre a autora
const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
  e.preventDefault()
  autoraBtn.classList.toggle('arrow-close')
  const autoraInfo = document.querySelector('.secao-autora__about')
  autoraInfo.classList.toggle('closed');
})
