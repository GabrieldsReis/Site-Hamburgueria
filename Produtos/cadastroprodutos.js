
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import { child, get, getDatabase, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { ref, getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBJodswmt7lrtvmvTlCG1sLJa9bj0FdIs0",
    authDomain: "herogeek-9cf88.firebaseapp.com",
    databaseURL: "https://herogeek-9cf88-default-rtdb.firebaseio.com",
    projectId: "herogeek-9cf88",
    storageBucket: "herogeek-9cf88.appspot.com",
    messagingSenderId: "633995872369",
    appId: "1:633995872369:web:45c6b71869455dd52bb3d0"



};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var file  =  {};
var choseFile = (e) => {

    file = e.target.files[0];
}






window.cadastro = function cadastro() {

    
    var produto = document.getElementById("produto").value;

    var preco = document.getElementById("preço").value;

    var img = document.getElementById("botao").value;

    if (produto == "" || preço == "" || img == "") {

        document.getElementById("mudar").innerHTML = "Preencha os campos"
        


    }

    else {
console.log("ok")
        document.getElementById("mudar").innerHTML = ""

        get(child(ref(database), 'produtos/' + produto)).then
            ((snapshot) => {
console.log("ok2")
                if (snapshot.exists()) {

                    document.getElementById("mudar").innerHTML = "Usuario ja registrado"

                } else {

                    document.getElementById("mudar").innerHTML = "usuario cadastrado";
                    ref(getStorage(), document.getElementById("botao").value)
                     set(ref(database, 'produtos/' + produto),

                        {

                            preco: preco

                        }

                    ); 
                }
            });
 

            console.log(document.getElementById("botao"))
const imagem = ref(getStorage(), document.getElementById("botao").value)
console.log(imagem)
    }


}




