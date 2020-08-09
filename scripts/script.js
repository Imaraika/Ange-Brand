 // const firebaseConfig = {
//     apiKey: "AIzaSyA9kJvSC66l6m2Qzf84PVV9AD6PaYh99SE",
//     authDomain: "contactform-5cb32.firebaseapp.com",
//     databaseURL: "https://contactform-5cb32.firebaseio.com",
//     projectId: "contactform-5cb32",
//     storageBucket: "contactform-5cb32.appspot.com",
//     messagingSenderId: "224377801596",
//     appId: "1:224377801596:web:ba22946f8f1279a396f2f9",
//     measurementId: "G-7Q5Q08YGGC"
//   };
//   //reference messages collection
// var messagesRef = firebase.database().ref('messages');

// //Listen for form submit
//  document.getElementById('contactForm').addEventListener('submit', submitForm);

//  function submitForm(e){
//      e.preventDefault();
//      var name =getInputValues('fname');
//      var email =getInputValues('email');

//      var message =getInputValues('message');
// // save message

// saveMessage(name, email, message) 
// }
//  //function to get form frrom values
//  function getInputValues(id){
//      return document.getElementById(id).value;

//  }
//  //save the message
//  function saveMessage(fname, email, message){
//      var newMessageRef = messagesRef.push();
//      newMessageRef.set({
//          name: fname,
//          email: email,
//          message: message
//      });
//  }
const form = document.querySelector('#contactForm');

//getting the data
db.collection('users').get().then((snapshot)=>{
// console.log(snapshot.docs);
snapshot.docs.forEach(doc => {
    console.log(doc.data())
})
});
//saving the data
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    db.collection('users').add({
        name : form.firstname.value,
        email: form.email.value,
        message: form.message.value

    });
    form.firstname.value='';
    form.email.value='';
    form.message.value='';
})

function login(){
window.alert(working);
}