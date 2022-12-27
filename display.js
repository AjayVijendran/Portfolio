import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDaObTz481G0a2cbqFpi9Evn7eQC6AqhJs",
    authDomain: "portfolio-contact-form-f3a1a.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-f3a1a-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-f3a1a",
    storageBucket: "portfolio-contact-form-f3a1a.appspot.com",
    messagingSenderId: "633096873494",
    appId: "1:633096873494:web:3e69f16b2fa50836463737",
    measurementId: "G-ESVXYFSYCD"
  };
const app = initializeApp(firebaseConfig);
import {getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
var db = getDatabase(app);

const cformdb = ref(db,"Form");
//retrieving data from firebase
function getdata(){
    onValue(cformdb,(snapshot)=>{
        var array = [];
        snapshot.forEach(element => {
            array.push(element.val());
        });
        addallitems(array);
    })
}
//storing retrieved data in table format
var sno=0;
var tbody = document.getElementById('tbody1');
function additem(name,mail,msg){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.innerHTML = ++sno;
    td2.innerHTML = name;
    td3.innerHTML = mail;
    td4.innerHTML = msg;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);
}
function addallitems(list){
    tbody.innerHTML="";
    list.forEach(data => {
        additem(data.name,data.email,data.msg);        
    });
}
window.onload = getdata;