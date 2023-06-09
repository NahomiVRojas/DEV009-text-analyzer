import analyzer from './analyzer.js';
 
const inputUser = document.querySelector('textarea[name ="user-input"]')
const textinner = document.querySelectorAll('li')
        
inputUser.addEventListener('keyup',()=>{
  // Contar caracteres 
  textinner[0].innerHTML='Caracteres:'+ analyzer.getCharacterCount(inputUser.value)
  // Contar Caracteres sin Espacio
  textinner[1].innerHTML='Caracteres Sin Espacio: '+analyzer.getCharacterCountExcludingSpaces(inputUser.value)
  //Contar Palabras
  textinner[2].innerHTML='Palabras:'+ analyzer.getWordCount(inputUser.value)
  // Contar Numeros
  textinner[3].innerHTML='Numeros:'+ analyzer.getNumberCount(inputUser.value)
  // Sumar todos los numeros que encuentre
  textinner[4].innerHTML='Suma Numeros:' + analyzer.getNumberSum(inputUser.value)
  // Longitud media de las palabras 
  textinner[5].innerHTML='Longitud de Palabras:'+ analyzer.getAverageWordLength(inputUser.value)
})    

// Boton limpiar
const buttonReset = document.getElementById('reset-button')
buttonReset.addEventListener('click',()=>{      
  inputUser.value=""
  textinner[0].innerHTML='Caracteres:'
  textinner[1].innerHTML='Caracteres sin espacio:'
  textinner[2].innerHTML='Palabras:'
  textinner[3].innerHTML='Numeros:'
  textinner[4].innerHTML='Suma Numeros:'
  textinner[5].innerHTML='Longitud de Palabras:'
})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`