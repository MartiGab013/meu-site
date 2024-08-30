Mecanico = {
    nome: "Gabriel Marti",
    idade: 17,
    tarefas: ["Arrumar o carro dos clientes"], 
    Concertar: function() {
        console.log("Arrumar três carros por dia")
}
}
console.log(Mecanico.tarefas)
Mecanico['idade'] = 17
console.log(Mecanico.idade)
Mecanico['nome'] = "Gabriel Marti"
console.log(Mecanico.nome)

Mecanico['idade'] = 20
console.log(Mecanico)

