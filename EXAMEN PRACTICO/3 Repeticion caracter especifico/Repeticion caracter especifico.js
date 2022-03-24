let frase = prompt("ingresa tu texto o frase: ");
let letraacontar = 'a';
conteoletra = 0;
for(let i = 0; i < frase.length; i++){
  if(frase.charAt(i) === letraacontar){
    conteoletra++;
  }
}

console.log(`la frase ${frase} contiene ${conteoletra} letras '${letraacontar}' en total`)
