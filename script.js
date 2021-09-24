//bloco 1
let valorDaConta = document.getElementById("valorDaConta");
let porcent5 = document.getElementById("porcent5");
let porcent10 = document.getElementById("porcent10");
let porcent15 = document.getElementById("porcent15");
let porcent20 = document.getElementById("porcent20");
let porcentOutra = document.getElementById("porcentOutra");
let qtdPessoas = document.getElementById("qtdPessoas");
let btnCalcular = document.getElementById("btnCalcular");

//bloco 2
let gorjetaTotal = document.getElementById("gorgetaTotal");
let gorjetaPorPessoa = document.getElementById("gorjetaPorPessoa");
let btnResetar = document.getElementById("btnResetar");

//codigo regra da porcentagem... valor x porcentagem / 100

let valorSelecionado = "";

function porcentagem(ref, refCor) {
  valorSelecionado = ref;
  porcentOutra.value = "";

  if (refCor === 1) {
    porcent5.style.backgroundColor = "#23686f";
    porcent10.style.backgroundColor = "#efefef";
    porcent15.style.backgroundColor = "#efefef";
    porcent20.style.backgroundColor = "#efefef";
  }
  if (refCor === 2) {
    porcent5.style.backgroundColor = "#efefef";
    porcent10.style.backgroundColor = "#23686f";
    porcent15.style.backgroundColor = "#efefef";
    porcent20.style.backgroundColor = "#efefef";
  }
  if (refCor === 3) {
    porcent5.style.backgroundColor = "#efefef";
    porcent10.style.backgroundColor = "#efefef";
    porcent15.style.backgroundColor = "#23686f";
    porcent20.style.backgroundColor = "#efefef";
  }
  if (refCor === 4) {
    porcent5.style.backgroundColor = "#efefef";
    porcent10.style.backgroundColor = "#efefef";
    porcent15.style.backgroundColor = "#efefef";
    porcent20.style.backgroundColor = "#23686f";
  }

  return valorSelecionado;
}

function calcular() {
  let x = parseFloat(valorDaConta.value);
  let y = valorSelecionado;

  if (porcentOutra.value === "") {
    porcentOutra = porcentOutra;
  } else {
    y = porcentOutra.value;
    porcent5.style.backgroundColor = "#efefef";
    porcent10.style.backgroundColor = "#efefef";
    porcent15.style.backgroundColor = "#efefef";
    porcent20.style.backgroundColor = "#efefef";
  }

  resultado = (x * y) / 100;

  gorjetaTotal.innerHTML = resultado + " R$";
  gorjetaPorPessoa.innerHTML = resultado / qtdPessoas.value + " R$";
  console.log(x);
}

function resetar() {
  gorjetaTotal.innerHTML = "0 R$";
  gorjetaPorPessoa.innerHTML = "0 R$";
  valorDaConta.value = "";
  qtdPessoas.value = 1;
  porcentOutra.value = "";

  valorSelecionado = "";

  porcent5.style.backgroundColor = "#efefef";
  porcent10.style.backgroundColor = "#efefef";
  porcent15.style.backgroundColor = "#efefef";
  porcent20.style.backgroundColor = "#efefef";
}
