$(document).ready(function (e) {

  $('.cntl').cntl({

    // The amount of "scroll padding" to allow
    // The more, the later the state will be revealed
    revealbefore: 300,

    // The animate class
    // This class should have animation rules in css
    anim_class: 'cntl-animate',

    // A callback once the state has been revealed
    onreveal: null

  });

  const buttonAutora = document.querySelector('.arrow')
    buttonAutora.addEventListener('click', function(e){
        e.preventDefault()
        buttonAutora.classList.toggle('arrow-close')
        const autoraInfos = document.querySelector('.secao-autora__about')
        autoraInfos.classList.toggle('opened');
    })

  const secaoDiva = document.querySelector('.secao-diva-citacao')
  secaoDiva.addEventListener('mouseover', function(e){
    $(".secao-diva-citacao p").animate({ fontSize: "30px" }, 300 )
  })

  secaoDiva.addEventListener('mouseout', function(e){
    $(".secao-diva-citacao p").animate({ fontSize: "20px" }, 300 )
  })


  const botaoHamburguer = document.querySelector('#btnResponsivo')

  botaoHamburguer.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  })

});


