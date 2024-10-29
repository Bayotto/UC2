const listaDeTarefas = ["Lavar a louça","Estender a roupa","Varrer a casa","Limpar o banheiro"]
console.log(listaDeTarefas)
listaDeTarefas.push("Limpar o carro") 
console.log(listaDeTarefas)
console.log("A lista de tarefas era antes de ser mudada:", listaDeTarefas)
listaDeTarefas[0] = "Dar banho no cachorro"
console.log("A lista de tareafas depois de ser mudada:", listaDeTarefas)
