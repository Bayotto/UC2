const readline = require(`readline-sync`)
const Raças = ["Dogo argentino","Rottweiler","Pastor caucasiano","Husky siberiano","Doberman."]
const indice = readline.questionInt( "Escreva uma raça: /n1 - Labrador /n2 - Vira-Lata /n3 - Golden-Retriever /n4 - Bulldog /n5 - Huskie /n")

console.log("Você escolheu:", Raças[indice - 1])

