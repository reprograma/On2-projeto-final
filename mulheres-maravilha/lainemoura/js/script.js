$(function() {

  // Função type writer título
  function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML='';
    textoArray.forEach((letra, i) => {
      setTimeout(function(){
        elemento.innerHTML += letra }, 75*i)
      });
    }

    const titulo = document.querySelector('.maravilhosas__titulo')
    typeWriter(titulo)

// Seta da seção autora


   $('.seta-cima').hide()
    $('.seta').click(function(){
      event.preventDefault();
      $('.containerautoraaberto').show('slow');
      $('.seta').hide()
      $('.seta-cima').show()

  });

  $('.seta-cima').click(function(){
    event.preventDefault();
    $('.containerautoraaberto').hide('slow');
    $('.seta').show()
    $('.seta-cima').hide()

});


// NAV

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


})

