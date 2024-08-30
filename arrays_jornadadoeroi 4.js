// Iventário inicial do herói

let Inventario = ["Espada de Ferro encantada com afiaçao cinco", "Arco-flecha com encantamento de chamas", "Armadura de ferro encantada com proteção cinco", "Mapa", "cavalo com armadura de ferro"]

// Exibindo o inventário inicial 
console.log("seu inventário inicial:,", Inventario);

/*3. Encontrando um Tesouro:
"O herói encontra um baú de tesouro e ganha um novo item!"*/

// Herói encontra um novo item 
let novoItem = "Capa de pele de dragão";
Inventario.push(novoItem);

// Exibindo o inventário atualizado
console.log("Você encontrou um baú! Novo item adcionado ao seu inventário", Inventario);

/*4 Enfrentando um inimigo:
"O herói enfrenta um goblin! Ele pode usar algo seu inventario."*/
// Herói emfrenta um goblin 
console.log("Um goblin apareceu! Prepare-se para batlha.");

/* Vocês tiveram uma bnatalha dura e parte de sua vida foi tirada.
Você pode usar uma poção de vida do seu inventario para se recuperar*/

let itemUsado2 = Inventario[1];
console.log("Você ataca o goblin com seu", itemUsado2);

/* Concluindo a Aventura */

// Finalizando a batalha 
console.log("Você derrotou o goblin e continua sua jornada.");

console.log(Inventario.length)

