const emojis = [
  "🧬",
  "🧬",
  "🚗",
  "🚗",
  "🎄",
  "🎄",
  "🍔",
  "🍔",
  "🌻",
  "🌻",
  "☃️",
  "☃️",
  "😎",
  "😎",
  "🦒",
  "🦒",
]; // Guardar os emojis

let openCards = []; // Armazenar os emojis que forem sendo abertos

let randomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
// Guardar os emojis de forma aleatória.
// Sort permite criar uma ordenação de alguma regra predefinida passada dentro dele.
// Invoquei a biblioteca Math para fazer o random.
// Utilizei o método random, através do if ternário '*'.
//          Se o n° aleatório for > 0.5, joguei um 2, caso não -1.
//          Peso de 2 vai pra frente e peso de -1 vai para trás.
//          Como terá mais de 1 elemento com peso 2, ele vai ordenar por ordem de chegada.
// * Uso if ternário: condition ? expr1 : expr2. Expressão avaliada como true ou false.
//   Se condition é true, o operador retornará o valor de expr1, caso não, retorna o valor de expr2.

// Desenhar os elementos na tela, através do for.
// O uso do .length junto da variável declarada é para que o i faça o loop até a quantidade de emojis declarados na constante.
// O i++ é para incrementar o loop de 1 em 1.
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = randomEmojis[i];
  box.onclick = handleClick; // Esse onclick é para criar a função clicar, toda vez que clicar, ele chamará a função criada handleClick.
  document.querySelector(".game").appendChild(box);
  // document.createElement é para criar dinamicamente as caixinhas através do elemento chamado 'div', que aparecerão na tela.
  // Associei a class item no box.className.
  // box.innerHTML é para pegar a variável declarada de emojis.
}

function handleClick() {
  if (openCards.length < 2) {
    // Essa primeira ação é para saber se só tem duas cartas abertas.
    this.classList.add("boxOpen"); // Essa class é para toda vez que um card for aberto.
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  } // Comparar se as cartas abertas são iguais.
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}

audio = document.getElementById("audio");

function play() {
  audio.play();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

function diminuir_volume() {
  if (audio.volume > 0) audio.volume -= 0.1;
}
