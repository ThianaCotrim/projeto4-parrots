let qtdCartas = prompt("Com quantas cartas quer jogar?");

criarCarta();

console.log("qtdCartas", qtdCartas);
function criarCarta () {
 let contador = 0; 
 
 while (contador < qtdCartas){
    console.log("contador: ", contador);
    document.querySelector(".container").innerHTML += `
    <div class="card">
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