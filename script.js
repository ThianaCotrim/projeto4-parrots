let qtdCartas = prompt("Com quantas cartas quer jogar?");

criarCarta();

function criarCarta () {

    while (!(qtdCartas >= 4 && qtdCartas%2 == 0 && qtdCartas <= 14)) {
        qtdCartas = prompt("Insira um número par, entre 4 e 14"); 
    }
 let contador = 0; 
 
 while (contador < qtdCartas){
  
    document.querySelector(".container").innerHTML += `
    <div onclick="virarCarta(this)" class="card">
    <div class="front-face face">
      <img src="./imagens/back.png" />
    </div>
    <div class="back-face face">
      <img src="./imagens/bobrossparrot.gif">
    </div>
  </div>`
  contador++;   
 }
}

function virarCarta(botaonoThis) {

botaonoThis.classList.add('revelarcarta');
}

