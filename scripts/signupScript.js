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
const submitForm=(e)=> {
    e.preventDefault();
    var userEmail = getInputVal('email');
    var userPassword = getInputVal('password');
    signUp(userEmail, userPassword)
    document.getElementById('signUpForm').reset();
  }
  document.getElementById('signUpForm').addEventListener('submit', submitForm);

// Submit form


// Function to get get form values
const getInputVal=(id)=> {
    return document.getElementById(id).value;
  }

  const signUp=(userEmail,userPass)=>{
  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function() {
      logout();
      window.location.href = 'signin.html';
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
      logout();
    //   
    });
    
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  