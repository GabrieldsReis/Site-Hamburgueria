alert("ok");

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import { child, get, getDatabase, ref, set, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { ref as storageRef, getStorage, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";


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


var adm = sessionStorage.getItem("Administrador");


if (adm != "Administrador") {

    window.location.href = "../loja/loja.html"


}



window.ChoseFile = (e) => {

    var file = e.target.files[0];

    window.file = file;
    //console.log(file);

}






window.cadastro = function cadastro() {



    var produto = document.getElementById("produto").value;

    var preco = document.getElementById("preço").value;

    var img = document.getElementById("botao").value;

    var file = window.file

    if (produto == "" || preço == "" || img == "") { // "||" => OU 
        document.getElementById("mudar").innerHTML = "Preencha os campos"

    }

    else {

        const storage = storageRef(getStorage(), 'imagens/' + file.name);

        const uploadTask = uploadBytesResumable(storage, file, '');

        uploadTask.on('state_changed', (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('upload esta' + progress + '% concluido.');

        },
            (error) => {

                if (error.code == 'storage/unauthorized') {
                    console.log("O usuario nao tem permissao para acessar o objeto")
                }
                if (error.code == 'storage/canceled') {
                    console.log("O usuario cancelou o upload");
                }
                if (error.code == 'storage/uknown') {
                    console.log("Ocorreu um, erro desconhecido. Inspecione error.serverResponse");
                }
            },

            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('Aquivo disponivel', downloadURL);

                    get(child(ref(database), 'produtos/' + produto)).then
                        ((snapshot) => {
                            console.log("ok2")
                            if (snapshot.exists()) {

                                document.getElementById("mudar").innerHTML = "produto ja registrado"

                            } else {

                                document.getElementById("mudar").innerHTML = "produto cadastrado";

                                set(ref(database, 'produtos/' + produto),

                                    {

                                        preco: preco,
                                        url: downloadURL
                                    }

                                );
                            }
                        });
                });
            }
        );


    }





    document.getElementById("mudar").innerHTML = ""




    console.log(document.getElementById("botao"))
    const imagem = storageRef(getStorage(), document.getElementById("botao").value)
    console.log(imagem)




}



