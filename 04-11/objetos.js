// Como criar objetos
/*const pessoa = {
// Atributo/Propriedade
//Nós não usamos let nem const
//Nós usamos ':' ao inves de '='
nome: "João",
idade: 17,
cpf: 111111111111,
filmesFavoritos: ["Como treinar seu dragão","Como treinar seu dragão 2","Como treinar seu dragão 3"],
trabalhar: function(){
    console.log(`${pessoa.nome} está trabalhando. Ele não vê a hora de chegar em casa e jogar.`)
}
}
console.log(pessoa)
//Para acessar um dos atributos, fazemos assim:
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])
//Para trocar o valor de um dos atributos, fazemos assim:
pessoa.idade = 30
console.log(pessoa.idade)
// Para adicionar um atributo ao objeto
pessoa.altura = 1.80
console.log(pessoa.altura)
console.log(pessoa)
pessoa.trabalhar()*/

const personagemFav = {
nome: "Itachi Uchiha",
idade: 21,
poderes: ["Izanami","Mangekyou Sharingan","Amaterasu","Bola de Fogo"],
afazeres: function(){
    console.log(`${personagemFav.nome} é um membro de uma organização do mal de Naruto, mas ele busca o perdão de seu irmão.`)
}
}

console.log(personagemFav.nome)
console.log(personagemFav.idade)
console.log(personagemFav.poderes)
personagemFav.afazeres()