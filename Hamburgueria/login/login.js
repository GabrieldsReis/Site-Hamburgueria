import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import {child, get, getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.login = function login() {


    var usuario = document.getElementById("nome").value;

    var senha = document.getElementById("senha").value;


    get(child(ref(database), 'usuarios/' + usuario)).then
    ((snapshot) => {

        if (snapshot.exists()){
            console.log(snapshot.val().senha);
            console.log(snapshot.val().senha == senha)
          

            if (snapshot.val().senha== senha){
               
                sessionStorage.setItem("nome")
                window.location.href = "../ex%207/ex7.html"

            }
     } else {

        document.getElementById("erro").innerHTML = "usuario não cadastrado";

     }
    });
}