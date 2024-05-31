function mudandoQnt(operacao, elemento) {
   // Obtém o valor dentro do primeiro <span> filho do elemento e converte para número
   var quantidadeSpan = elemento.getElementsByTagName("span")[0];
   var quantidade = parseInt(quantidadeSpan.innerHTML);

   // Variável para armazenar o resultado da operação
   var conta = quantidade;

   
   if (operacao == "+") {
      conta++;
   }

   
   if (operacao == "-" && conta > 0) {
      conta--;
   }

   // Atualiza o valor do primeiro <span> com o novo valor
   quantidadeSpan.innerHTML = conta;

   // Obtém o preço unitário do item
   var precoUnitario = parseFloat(elemento.parentNode.parentNode.querySelector("h6").innerText.split('R$')[1].replace(",", "."));

   // Calcula o valor total do item (quantidade * preço unitário)
   var totalItem = conta * precoUnitario;

   // Atualiza o preço total do item
   elemento.parentNode.parentNode.querySelector(".precos").innerHTML = totalItem.toFixed(2).replace(".", ",");

console.log(precoUnitario)
console.log(conta)

   atualizaTotalGeral();
}



function atualizaTotalGeral() {
   // Obtém todos os elementos com a classe "precos"
   var precos = document.getElementsByClassName("precos");

   // Variável para armazenar o total geral
   var total = 0;

   // Itera sobre todos os elementos com a classe "precos"
   for (let i = 0; i < precos.length; i++) {
      total += parseFloat(precos[i].innerHTML.replace(",", "."));
   }

   // Atualiza o valor total no elemento com id "Total"
   document.getElementById("Total").innerHTML = total.toFixed(2).replace(".", ",");
}