let nome = prompt("Digite o nome de seu herói: ");
let xp = prompt("Digite quantos XP tem seu herói: ");

let nivelHeroi;

if (xp <= 1000) {
  nivelHeroi = "Ferro!";
} else if (xp >= 1001 && xp <= 2000) {
  nivelHeroi = "Bronze!";
} else if (xp >= 2001 && xp <= 5000) {
  nivelHeroi = "Prata!";
} else if (xp >= 5001 && xp <= 7000) {
  nivelHeroi = "Ouro!";
} else if (xp >= 7001 && xp <= 8000) {
  nivelHeroi = "Platina/Diamante!";
} else if (xp >= 8001 && xp <= 9000) {
  nivelHeroi = "Ascendente!";
} else if (xp >= 9001 && xp <= 10000) {
  nivelHeroi = "Im{ortal!";
} else {
  nivelHeroi = "Radiante!";
}
console.log(
  `O Herói com nome de ${nome} está com ${xp} nível de XP e está no nível de ${nivelHeroi}!`
);

// function classificacaoDoHeroi() {
//   document.getElementById("frm1").submit();
// }
