const pianoKeys = document.querySelectorAll(".piano-keys .key"); // Pega todas as teclas


let mapedKeys = []; // Salva todas as teclas disponíveis/mapeadas

let audio = new Audio("src/tunes/a.wav"); // Carrega áudio para a memória

// Toca o som referente à tecla em questão
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`; 
    audio.play();
  
    // Pega a tecla pressionada e adiciona a classe active
    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active");

    // Remove a classe active
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  };


// Percorre as teclas e permite tocá-lo por meio do mouse
pianoKeys.forEach((key) => {
    // dataset: Pega todos os valores dos elementos data = key
    // console.log(key.dataset.key);

    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key); // Salva todas as teclas (valor data-key)
  });


//   Permite tocar por meio do teclado
  document.addEventListener("keydown", (e) => {
    // console.log(e.key)
    // Permite tocar o som apenas de teclas mapeadas
    if (mapedKeys.includes(e.key)) {
      playTune(e.key);
    }
  });