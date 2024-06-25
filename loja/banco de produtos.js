
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
            console.log()
            publicar(elemento.val().url,elemento.key,elemento.val().precos)
    })
  
}).catch ((error) => {
    console.log(error);
});                     
}

function publicar(url,nome,preco) {

    console.log(nome)
    var postagens = document.getElementById("att");

    var tagImg = document.createElement("img");
    tagImg.src = url;

    var tagNome = document.createElement("p");
    tagNome.innerHTML = nome;

    var tagPreco = document.createElement("p");
    tagNome.innerHTML = preco;

    var novaPostagem = document.createElement("div");
    novaPostagem.appendChild(tagNome);
    novaPostagem.appendChild(tagPreco);
    novaPostagem.appendChild(tagImg)
    novaPostagem.style.border = "solid 3px";
    novaPostagem.style.maxWidth= "50%";
    novaPostagem.style.margimBottom = "10px";

    postagens.appendChild(novaPostagem);


}




