const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input"); // Esconder as letras do teclado.

let mapedKeys = []; // Para habilitar apenas teclas permitidas.
let audio = new Audio("src/tunes/a.wav"); // Por padrão deixar o a por ser o primeiro.

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`; // Pegando dinamicamente os áudios.
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // ${} para pegar a variável dinamicamente.
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key); // Mapeando as teclas permitidas.
});

document.addEventListener("keydown", (e) => {
  // Para pegar as teclas pressionadas.
  if (mapedKeys.includes(e.key)) {
    // Incluindo apenas letras selecionadas.
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide")); // Toggle efeito de liga e desliga, escondendo as letras.
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
