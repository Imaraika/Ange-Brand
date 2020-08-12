const dbpost = firebase.firestore();
const postform= document.querySelector('#add-comment-form');
// saving the data
postform.addEventListener('submit', (e) =>{
    e.preventDefault();
 dbpost.collection('comments').add({
     comment: postform.userComment.value,
     name: postform.name.value
 });
 postform.userComment.value='';
 postform.name.value='';
})