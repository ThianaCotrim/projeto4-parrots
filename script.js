
let qtdCartas = prompt("Com quantas cartas quer jogar?");
let gifs = [1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);
let carta1 = "";
let carta2 = "";
let jogadas = 0;
let tempo = 0;
let idIntervalo;


criarCarta();
contar();

function criarCarta() {

  let cardsId = [];

  for (let i = 0; i < qtdCartas / 2; i++) {

    cardsId.push(gifs[i]);
  }

  let cardsDuplicadas = ([...cardsId, ...cardsId]).sort(() => Math.random() - 0.5);

  while (!(qtdCartas >= 4 && qtdCartas % 2 == 0 && qtdCartas <= 14)) {
    qtdCartas = prompt("Insira um número par, entre 4 e 14");
  }
  let contador = 0;

  while (contador < qtdCartas) {

    document.querySelector(".container").innerHTML += `
    <div data-test="card" onclick="virarCarta(this)" class="card">
    <div class="front-face face">
    <img data-test="face-up-image" src="./imagens/foto${cardsDuplicadas[contador]}.gif" class="imgFront">
    </div>
    <div class="back-face face">
    <img data-test="face-down-image" src="./imagens/back.png" />
    </div>
  </div>`
    contador++;
  }
}

function virarCarta(botaonoThis) {

  if (botaonoThis.classList.contains("revelarcarta")) {
    return
  }
  if (carta1 === "") {
    botaonoThis.classList.add('revelarcarta');
    carta1 = botaonoThis

  } else if (carta2 === "") {
    botaonoThis.classList.add('revelarcarta');
    carta2 = botaonoThis

    verificarCarta();
    endgame();
  }

  jogadas++
}

function verificarCarta(cartaVirada) {


  let cartaRevelada = document.querySelector('.imgFront').getAttribute('src');

  if (carta1.querySelector('.imgFront').getAttribute('src') === carta2.querySelector('.imgFront').getAttribute('src')) {

    carta1 = "";
    carta2 = "";

  } else {
    setTimeout(() => {
      carta1.classList.remove("revelarcarta");
      carta2.classList.remove("revelarcarta");

      carta1 = "";
      carta2 = "";
    }, 1200)

  }
}

function endgame() {

  let qtdCartasViradas = document.querySelectorAll('.revelarcarta').length;

  if (Number(qtdCartas) === qtdCartasViradas) {

    setTimeout(() => {

      alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi ${tempo} de segundos!`);
      clearInterval(idIntervalo);

      let resposta = prompt('Você gostaria de reiniciar a partida? sim ou não?');

      let sim = 'sim';

      if (resposta === 'sim') {

        atualizar();
      }


    }, 1000)

  }
}

function contar() {

  idIntervalo = setInterval(acrescentarContador, 1000);
}

function acrescentarContador() {

  tempo++;

  const elementoContador = document.querySelector(".contador");
  elementoContador.innerHTML = tempo;
}

function atualizar() {
  window.location.reload();
}