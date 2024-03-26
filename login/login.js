
var nome = "Gabriel";

    var senha = "123";



function botao() {

    

    if (nome == document.getElementById("nome").value && senha == document.getElementById("senha").value) {
        window.location.href = "D:/xampp/htdocs/Gabriel%20Reis/Hamburgueria/ex%207/ex7.html"
    }

    else {

        console.log("errado");

    }

sessionStorage.setItem ("nome", nome) ; 







}
