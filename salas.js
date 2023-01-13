// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyD-ikkKRWuRnGHeYI-xgm5SveJZMDDbZYE",
   authDomain: "tiggwitter3333.firebaseapp.com",
   databaseURL: "https://tiggwitter3333-default-rtdb.firebaseio.com",
   projectId: "tiggwitter3333",
   storageBucket: "tiggwitter3333.appspot.com",
   messagingSenderId: "767207452789",
   appId: "1:767207452789:web:7e25c9a2d6e410d33e483c"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("Usuario");
  document.getElementById("nu").innerHTML = "¡Hola " + user_name+ " !";
   
  function AddRoom(){
     room_name = document.getElementById("NombreDelServidor").value;
     firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
     });
     localStorage.setItem("room_name",room_name);
   window.location.replace("servidorpublico.html")
  }
