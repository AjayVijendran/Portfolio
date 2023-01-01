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
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
const auth = getAuth();
document.getElementById('login').addEventListener('click',signin);

function signin(e){
    e.preventDefault();
    var email=document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("User Logged in");
            window.location.replace("../html/firebase_display.html");

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Invalid Username/Password");
        });

}