function handleMouseEnter() {
  // () = vazio para não receber nenhum parâmetro.
  this.classList.add("s-card--hovered"); // this para pegar o elemento que desejo e --hovered é um modificador do BEM CSS.
  document.body.id = `${this.id}-hovered`; // Pegar o body, para colocar imagem no backgroud, quando passar o mouse na imagem do Homem Aranha.
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
  document.body.id = ""; // "" vazio para limpar o id dele.
}

// Criando a função para seleção dos cards.
function addEventListenersToCards() {
  // addEventListeners + um nome sugestivo para ciar a função, nesse caso foi ToCards.
  const cardElements = document.getElementsByClassName("s-card");
  // .getElementsByClassName("classe HTML") -> para pegar a classe dos cards tag a.

  //Quero que quando o usuário coloque o mouse em cima do card ele adicione uma nova classe CSS dinamicamente.
  for (let index = 0; index < cardElements.length; index++) {
    // index = 0 para pegar o primeiro elemento.
    // .length = pegar o tamanho do array.
    const card = cardElements[index]; // 'onmouseenter' e 'mouseleave' são dois Eventos do Mouse.
    card.addEventListener("mouseenter", handleMouseEnter); // addEventListener = evento que escuta.
    // O 'onmouseenter', chama uma função ao mover o ponteiro do mouse sobre uma imagem.
    // handleMouseEnter é uma função criada ela lá no início desse script, para que o addEventListener possa chamar ela.
    card.addEventListener("mouseleave", handleMouseLeave);
    // O 'mouseleave', uma função ao mover o ponteiro do mouse para fora de uma imagem.
    // Para fazer com que a imagem volte ao estado normal ao cursor sair de frente da imagem do Homem Aranha.
  }
}

// Para que o JavaScript seja executado apenas quando toda a página seja carregada,
// senão vai pegar alguma coisa que ainda não está renderizado na tela para o usuário.
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
// DOMContentLoaded evento padrão do JavaScript, quando for todo carregado ele chamará a
// função que criamos addEventListenersToCards e false porque não quero passar mais nada.

// Função criada para girar o Carrossel.
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector(".s-cards-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  );

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector(
    ".s-controller__button--active"
  );
  activeButtonElement.classList.remove("s-controller__button--active");
  selectedButtonElement.classList.add("s-controller__button--active");
}
