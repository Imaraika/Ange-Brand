var firebaseConfig = {
    apiKey: "AIzaSyC3l1a6PVJXgacm5wW_o9ULj59Euda4Smg",
    authDomain: "portfolio-84bc5.firebaseapp.com",
    databaseURL: "https://portfolio-84bc5.firebaseio.com",
    projectId: "portfolio-84bc5",
    storageBucket: "portfolio-84bc5.appspot.com",
    messagingSenderId: "1012995269497",
    appId: "1:1012995269497:web:66e663ed6d74ddb74a05a8",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('loginForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  var userEmail = getInputVal('email_field');
  var userPassword = getInputVal('password_field');
 console.log(login(userEmail,userPassword));
  document.getElementById('loginForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
  }
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        document.getElementById("userDiv").style.display = "block";
        document.getElementById("loginDiv").style.display = "none";
        }
  
    } else {
      // No user is signed in.
      document.getElementById("userDiv").style.display = "none";
      document.getElementById("loginDiv").style.display = "block";

    }
  });
  
  function login(userEmail,userPass){
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {
      if(userEmail==='ange@gmail.com'&& userPass==='123456'){
        window.location.href = 'posts.html';
        
      }else{
        window.location.href = 'blog.html';
        
      }
    
    });
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("error: " + errorMessage)
      });
    }
      
    // }).catch(function(error) {
      // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   document.querySelector('.alert2').style.display = 'block';
  // Hide alert after 3 seconds
//   setTimeout(function () {
//     document.querySelector('.alert2').style.display = 'none';
//   }, 3000);
//     //   
//     });
    
//   }
  function logout(){
    firebase.auth().signOut();
  }
  