const titulo = document.querySelector('#principal__titulo');
typeWriter(titulo);


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        for(let i = 0; i < textoArray.length; i++) {
          setTimeout(() => elemento.innerHTML += textoArray[i], 75* i);
        }
    }

$(document).ready(function () {
    
    $('.autora__apresentacao').hide('slow');
    
    $('.autora').click(function () {
        $('.autora__apresentacao').toggle('slow'); 
    });
})