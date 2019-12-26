$(document).ready()



$(function(){

});

document.getElementById('btnSobreMim').addEventListener("click", openSection);
console.log('cheguei aqui')

function openSection() {
  document.getElementById('sectionSobreMim').style.display = "initial";
  console.log('cliquei')
}
