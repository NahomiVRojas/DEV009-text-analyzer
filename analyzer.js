const analyzer = {
  getWordCount: (text) => {  
    return text.split(' ').length
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => { 
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {   
    const remplazar = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
    const conRemplazo = remplazar.length
    return conRemplazo  
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  }, 
  getAverageWordLength: (text) =>{
    const lengthword = text.split(' ')
    let sum = 0
    for(let i=0; i<(lengthword.length); i++){
      sum = sum+lengthword[i].length
    } 
    console.log(sum)  
    return Math.round((sum / lengthword.length)*100)/100

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => { 
    const lengthword = text.split(' ')
    let acumulador = 0
    for(let i=0; i<(lengthword.length); i++){
      if(!isNaN(lengthword[i])){
        acumulador= acumulador+1}}
    return acumulador
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const lengthword= text.split(' ')
    let acumulador=0
    for(let i=0; i<(lengthword.length); i++){
      if(!isNaN(lengthword[i])){
        acumulador= acumulador+parseFloat(lengthword[i])}}
    return acumulador
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
}

export default analyzer;
