//lista de variáveis carros indice começa com 0 (zero) --> ex: [0, 1, 2]
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 4, 6, 5, 4.2, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro , alturaCarro);
    }
}

function movimentaCarro(){
 for(let i = 0; i < velocidadeCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
 }
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < xCarros.length; i++){
    if (xCarros[i] < -50){
            xCarros[i] = 600;
    }
  }
}

