import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import {child, get, getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.cadastro = function cadastro() {


var usuario = document.getElementById ("nome").value;

var senha = document.getElementById ("senha").value;

if (usuario == "" || senha == "") {

document.getElementById ("mudar").innerHTML = "preencha os campos" 
}

 

else {

   

 get(child(ref(database), 'usuarios/' + usuario)).then
            ((snapshot) => {

                if (snapshot.exists()){
              
document.getElementById("mudar").innerHTML = "Usuario ja registrado"
                   
             } else {

                document.getElementById("erro").innerHTML = "usuario não cadastrado";

             }
            });


set(ref (database, 'usuarios/' + usuario), 

{

senha: senha

}

);

}




}
