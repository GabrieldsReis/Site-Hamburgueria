
var x = document.getElementsByClassName("mx-2")[0].clientHeight;

document.getElementsByClassName("mx-2")[0].style.height = x + "px";




function mudandoQnt(operacao, elemento) {



   var a = elemento.getElementsByTagName("span")[0].innerHTML * 1;

   var conta = 0;

   if (operacao == "+") {
      conta = a + 1;
      elemento.getElementsByTagName("span")[0].innerHTML = conta;

   }

   if (operacao == "-") {
      conta = a - 1;
      elemento.getElementsByTagName("span")[0].innerHTML = conta;




   }

   elemento.getElementsByTagName("span")[1].innerHTML = conta;

   elemento.getElementsByTagName("span")[3].innerHTML = ((conta * elemento.getElementsByTagName("span")[2].innerHTML.replace(",", ".")).toFixed(2) * 1 + "").replace(".", ",");




   var precos = document.getElementsByClassName("precos");


   var total = 0;


   for (let i = 0; i < precos.length; i++) {


      total = total + precos[i].innerHTML.replaceAll(",", ".") * 1;




   }
   /*
   total = precos[0].innerHTML.replaceAll(",", "." )*1 + precos[1].innerHTML.replaceAll("," , ".")*1 + precos[2].innerHTML.replaceAll("," , ".")*1;
   modo ruim
   */

   document.getElementById("Total").innerHTML = (total.toFixed(2) * 1 + "").replace(".", ",");


}