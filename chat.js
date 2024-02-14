
const firebaseConfig = {
    apiKey: "AIzaSyDsYWMLMRqMD973CAd5GenLagneYXdrhBY",
    authDomain: "web-app-vamos-conversar-54025.firebaseapp.com",
    databaseURL: "https://web-app-vamos-conversar-54025-default-rtdb.firebaseio.com",
    projectId: "web-app-vamos-conversar-54025",
    storageBucket: "web-app-vamos-conversar-54025.appspot.com",
    messagingSenderId: "570537760920",
    appId: "1:570537760920:web:bcb838f34a05356278d8ed",
    measurementId: "G-GYVGFFRXWT"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



