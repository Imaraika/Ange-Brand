
// const form = document.querySelector('#contactForm');

// //getting the data
// db.collection('users').get().then((snapshot)=>{
// console.log(snapshot.docs);
// snapshot.docs.forEach(doc => {
//     console.log(doc.data())
// })
// });
// //saving the data
// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     db.collection('users').add({
//         name : form.firstname.value,
//         email: form.email.value,
//         message: form.message.value

//     });
//     form.firstname.value='';
//     form.email.value='';
//     form.message.value='';
// })

// function login(){
// window.alert(working);
// }
function toggle(x) {
    elMenu = document.querySelector('#notificationMsg');
    x.classList.toggle('change');
    elMenu.classList.toggle('change');
  }