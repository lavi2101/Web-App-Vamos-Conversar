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
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML =
    "Bem-vindo(a), " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adicionando nome da sala",
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "index.html";
  }
  
  function getData() {
    firebase.database().ref("/").on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Nome da sala: " + Room_names);
          row ="<div class='room_name' id=" +Room_names +" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
  }
  
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }