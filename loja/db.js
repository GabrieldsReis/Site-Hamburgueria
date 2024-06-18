import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

import{child,query, limitToLast ,getDatabase, set, ref , get, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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

const produtos = query(ref(database,'produtos'),limitToLast(100));

produtos.forEach((doc) =>
    {
        console.log(doc)


    }


);

console.log(produtos)
