const db = firebase.firestore();
const form = document.querySelector('#contactForm');

//getting the data
db.collection('users').get().then((snapshot)=>{
// console.log(snapshot.docs);
snapshot.docs.forEach(doc => {
    console.log(doc.data())
       //show arlet
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
    window.alert("thanks")
// show alert
document.querySelector('.toggle-menu').style.display = 'block';
    
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.toggle-menu').style.display = 'none';
}, 3000);
})

function login(){
window.alert(working);
}
