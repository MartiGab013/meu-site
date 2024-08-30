// Iventário inicial do herói

let Inventario = ["Espada de Ferra encantada com afiaçao cinco", "Arco-flecha com encantamento de chamas", "Armadura de ferro encantada com proteção cinco", "Mapa", "cavalo com armadura de ferro"]

// Exibindo o inventário inicial 
console.log("seu inventário inicial:,", Inventario);

/*3. Encontrando um Tesouro:
"O herói encontra um baú de tesouro e ganha um novo item!"*/

// Herói encontra um novo item 
let novoItem = "Capa de pele de dragão";
Inventario.push(novoItem);

// Exibindo o inventário atualizado
console.log("Você encontrou um baú! Novo item adcionado ao seu inventário", Inventario);

