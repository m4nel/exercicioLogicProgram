



function calculo() {
  let valor = document.getElementById("valorpagar").value;
  let parcelas = document.getElementById("Qntparcelas").value;
  let resultado = document.getElementById("resultado");
valorSemParcelas = Number
  ValorComParcelas = Number
 

  valorSemParcelas = (valor * 20) / 100;

  ValorComParcelas = valor / parcelas;

resultado.innerText = `O valor do seu emprestimo foi de R$${valor} que voce vai pagar em  ${parcelas} Parcelas de R$${ValorComParcelas}`
}

// submit.addEventListener("click", calculo)
// {

//  if (valor == Number %% parcelas == Number)
