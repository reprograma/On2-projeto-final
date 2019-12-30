window.addEventListener("scroll", function(){

  if(pageYOffset >= 250) {
     document.querySelector('.navegacao').style.backgroundColor = '#911544';
     document.querySelector('.navegacao__itens').style.backgroundColor = '#911544';
  } else {
     document.querySelector('.navegacao').style.backgroundColor = '#0000007d';
     document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
  }

})



try {
  const buttonAutora = document.querySelector('.arrow')
  buttonAutora.addEventListener('click', function(e){
      e.preventDefault()
      buttonAutora.classList.toggle('arrow-close')
      const autoraInfos = document.querySelector('.secao-autora__about')
      autoraInfos.classList.toggle('opened');
  })
} catch {
  if(!buttonAutora) {
      console.log('estamos na pagina home')
  }
}

