$
(function(){

  try {
    const buttonAutora = document.querySelector('.arrow')
    buttonAutora.addEventListener('click', function(e){
        e.preventDefault()
        buttonAutora.classList.toggle('arrow-close')
        const autoraInfos = document.querySelector('.autora__about')
        autoraInfos.classList.toggle('opened');
    })
  } catch {
    if(!buttonAutora) {
        console.log('estamos na pagina home')
  }
}



});



