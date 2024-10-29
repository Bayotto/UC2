//Array são listas de elementos
/*const listaDeCompras = []; // Este é um array vazio
const listaDeNomes = ["Leo","Vitoria","Nala","Margot","Simba"]
const listaDeNumeros = [10,15,30,91,7]
const listaDeBooleanas = [true,false,true]

console.log(listaDeCompras)
//Adiciona um item no final  do array
listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)
//Remove o ultimo item de um array
listaDeCompras.pop()
console.log(listaDeCompras)
//Exibe o item de acordo com a sua posição
console.log(listaDeNomes[0])//Leo
console.log(listaDeNumeros[3])//99
console.log(listaDeBooleanas[3])// undefined

//Troca o valor de um numero no array de acordo com sua posição/indice
console.log("Array antes da troca:", listaDeNumeros)
listaDeNumeros[3] = 100
console.log("Array depois da troca:", listaDeNumeros)
//Mostra o tamanho do Array
console.log(listaDeNomes.length)
console.log(listaDeBooleanas.length)*/

const seriesBoas = ["Game of Thrones","BreakingBad","Shogun"]
console.log(seriesBoas.includes("Game of Thrones"))// true
console.log(seriesBoas.includes("La Casa do Papel"))// false

//Metodo Splice
// Remove n elementos a partir da posição i do array
const letras = ["A","B","C","D","E","F","G","H"]
letras.splice(2,1,"Z","Y")
console.log(letras)