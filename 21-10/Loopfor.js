/*for( let voltas = 0; voltas <= 10;  voltas++){
    console.log(voltas)
}


for(let numero = 1; numero <= 10; numero++){
    console.log(numero)
}
*/
// Exercicio 1 - FOR

// Usando for, faça um contador que vai de 10 até 0
// Quando o contador for zero, imprime BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM
// Quando o contador foi par, imprime TICCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
// Quando o contador foi impar, imprime TACCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

for( let loucura = 10; loucura >= 0; loucura-- ){
   
        if(loucura === 0 ){
        console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
}else if(loucura % 2 === 0){
    console.log("TICCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
}else{
    console.log("TACCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
}}