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

//Initialise Firebase
firebase.initializeApp(firebaseConfig);

//reference for database
var cformdb=firebase.database().ref('Form');

document.getElementById('Form').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var msg = getElementVal("msg");
    savedata(name,email,msg);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(()=>{document.querySelector('.alert').style.display='none';},3000);

    document.getElementById('Form').reset();

}

function getElementVal(id){
    return document.getElementById(id).value;
}

function savedata(name,email,msg){
    var newform = cformdb.push();

    newform.set({
        name: name,
        email: email,
        msg: msg
    });
}
