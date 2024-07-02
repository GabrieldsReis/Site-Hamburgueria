
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import { child, get, getDatabase, ref, set, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


Geral();
function Geral() {
    const firebaseConfig = {
        apiKey: "AIzaSyBJodswmt7lrtvmvTlCG1sLJa9bj0FdIs0",
        authDomain: "herogeek-9cf88.firebaseapp.com",
        databaseURL: "https://herogeek-9cf88-default-rtdb.firebaseio.com",
        projectId: "herogeek-9cf88",
        storageBucket: "herogeek-9cf88.appspot.com",
        messagingSenderId: "633995872369",
        appId: "1:633995872369:web:45c6b71869455dd52bb3d0"
    }


    const dbRef = ref(getDatabase(initializeApp(firebaseConfig)));
    
    get(child(dbRef, 'produtos')).then((snapshot) => {
        snapshot.forEach(elemento => {
           
            publicar(elemento.val().url,elemento.key,elemento.val().preco)
    })
  
}).catch ((error) => {
    console.log(error);
});                     
}


//criando a funcao dos cards
function publicar(url,nome,preco) {

    console.log(preco)
    var postagens = document.getElementById("att");
    var botao = document.createElement("Button");
botao.className = "btn btn-sm btn-outline-secondary";
botao.setAttribute("onclick", "javascript:mudandoQnt('-', this.parentNode)")
botao.innerHTML = "-" ;
var span = document.createElement("span");
span.className = "mx-2";
span.innerHTML = "0";
var botao2 = document.createElement("Button")
botao2.className = "btn btn-sm btn-outline-secondary";
botao2.setAttribute("onclick", "javascript:mudandoQnt('+', this.parentNode)")
botao2.innerHTML = "+";
var h6 = document.createElement("h6");
h6.innerHTML = "R$"+preco+" <br> Total: R$ <span class='precos'>0,00</span> ";
//criando botoes

var divConteudo = document.createElement("div");
divConteudo.className = "d-flex justify-content-between align-items-center";
divConteudo.appendChild(botao);
divConteudo.appendChild(span);
divConteudo.appendChild(botao2);
divConteudo.appendChild(h6);
//criando o container e colocando o conteudo nele

var h5 = document.createElement("h5");
h5.className = "card-title";
h5.innerHTML = nome;

//titulo


var cardBody = document.createElement("div");
cardBody.className = "card-body";
cardBody.appendChild(h5);
cardBody.appendChild(divConteudo);


var img = document.createElement("img");
img.src = url
img.className = "card-img-top";
//imagem


var cardCustom = document.createElement("div");
cardCustom.className = "card card-custom";
cardCustom.appendChild(img);
cardCustom.appendChild(cardBody);
//container da imagem




var cardInicial = document.createElement("div");
cardInicial.className = "col-md-4 mb-4";
cardInicial.appendChild(cardCustom);
//o todo

postagens.appendChild(cardInicial);
//postando o todo 

}




