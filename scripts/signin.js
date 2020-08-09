firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("userDiv").style.display = "block";
      document.getElementById("loginDiv").style.display = "none";

    } else {
      // No user is signed in.
      document.getElementById("userDiv").style.display = "none";
      document.getElementById("loginDiv").style.display = "block";
    }
  });
function login(){
 var userEmail = document.getElementById("email_field").value;
 var userPassword = document.getElementById("password_field").value;
//  window.alert(userEmail +" "+ userPassword);
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
     window.alert("Error : " + errorMessage);

    // ...
  });
}