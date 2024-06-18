import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import { child, get, getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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

window.cadastro = function cadastro() {


   var usuario = document.getElementById("email").value;

   var senha = document.getElementById("senha").value;

  if (usuario == "" || senha == "") {

      document.getElementById("mudar").innerHTML = "preencha os campos"
   }



   else {



      get(child(ref(database), 'usuarios/' + usuario)).then
         ((snapshot) => {

            if (snapshot.exists()) {

               document.getElementById("mudar").innerHTML = "Usuario ja registrado"

            } else {

               document.getElementById("mudar").innerHTML = "usuario cadastrado";
               
               set(ref(database, 'usuarios/' + usuario),

               {
      
                  senha: senha
      
               }
      
            );
            }
         });


      

   }




}


console.log()