/*Exercicio1
const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
    ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
    ]
}
a)
console.log(filme.elenco[0]) // Vai chamar o Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //  Retira a "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // Vai chamar o segundo atributo*/

// Exercicio2

/*const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
a)
console.log(cachorro) // Irá aparecer todos os atributos do cachorro
console.log(gato) // Irá aparecer o nome Juba no lugar do Juca
console.log(tartaruga) //Irá aparecer o nome Jubo no lugar de Juba
b) A sintaxe irá puxar os atributos que tem no objeto principal para outros objetos.
*/


// Exercicio3

/*function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}
a)
console.log(minhaFuncao(pessoa, "backender")) // Irá aparecer false
console.log(minhaFuncao(pessoa, "altura")) // Irá aparecer undefined
b) Porque esse atributo não existe.
*/