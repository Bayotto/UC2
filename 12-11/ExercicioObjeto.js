const Pessoa1 = {
    nome:"João",
    idade: 17,
    generoMusical: "Pagode"
}


function novoObj(obj){
    const novaPessoa = {
        ...obj,
        comidasFav: ["Pizza", "Lasanha", "Açai"],
        melhorAmigo: {
            nome: "Rafael",
            idade: 17,
           
        }}
        console.log(`O nome da pessoa é ${novaPessoa.nome} e minhas comidas preferidas são ${novaPessoa.comidasFav[0]}, ${novaPessoa.comidasFav[1]}, ${novaPessoa.comidasFav[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}
novoObj(Pessoa1)

