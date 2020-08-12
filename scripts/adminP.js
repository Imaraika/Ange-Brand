const dbcontactMSg = firebase.firestore();
const db = firebase.firestore();
document.getElementById('admin-form').addEventListener('submit', submitBlog);
const messagesDiv= document.querySelector('.admin-messages');
const blogUI = document.querySelector('#table');

function renderMessage(doc){
    let div = document.createElement('div');
    let name = document.createElement('span');
    let message = document.createElement('span');

    div.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    message.textContent = doc.data().message;

   div.appendChild(name);
div.appendChild(message);
messagesDiv.appendChild(div);
}

//getting the message from users collection
dbcontactMSg.collection('users').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMessage(doc);
    })
})

function submitBlog(e){
  e.preventDefault();
  
    // Get values
    var author = getInputVal('author');
    var title = getInputVal('blog-title');
    var description = getInputVal('blog-description');
    
    
    // save message
    saveBlog(author, title, description);
    // show alert
    document.querySelector('.blog-alert').style.display = 'block';
    
    // Hide alert after 2 seconds
    setTimeout(function(){
      document.querySelector('.blog-alert').style.display = 'none';
    }, 2000);

    // Clear Form
    document.getElementById('admin-form').reset();
}

// Function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)
// save Blog to firebase
function saveBlog(author, title, description){

db.collection('Blogs').doc().set({
  author: author,
  title: title,
  description: description,
  date: dateTime
}).then(function (){
  console.log('Blog is now saved');
}).catch(function(err){
  console.log('Sorry! Blog is not saved');
})

}
 function display(){
   const ele=document.getElementById('admin-form-container')
  ele.style.display=ele.style.display==="block"?"none":"block";
   console.log(' works are here her her hereh ehere works');
 }

 // Get blog ui in table
 const getBlogUI = (data)=>{
  let ui= `
  <caption><b>Lists of Blogs</b></caption><br/>
  <tr>
      <th>Blog Title</th>
      <th>Published</th>
      <th>Edit Blog</th>
      <th>Delete Blog</th>
  </tr>
  `;
  data.forEach(item=>{
    const blog =item.data();
    //console.log(item.id)
    console.log(blog);
    let blogUIFormat =`
 
        <tr>
            <td>${blog.title}</td>
            <td>${blog.date}</td>
            <td><img onclick="editBlog(${item.id})" src="../Asset/images/editicon.png" height="45px" width="45px"></td>
            <td><img onclick="deleteBlog(${item.id})" id="${item.id}" src="../Asset/images/deleteicon.jpg" height="55px" width="55px"/></td>
        </tr>
    `
    ui+=blogUIFormat
  })
  blogUI.innerHTML = ui
}



db.collection("Blogs").get().then(info=>{
  getBlogUI(info.docs)
});

// deleting a Blog

function deleteBlog(e){
  let id=e.getAttribute('id')
  db.collection('Blogs').doc(id).delete().then(()=>{
    alert('Blog deleted');
  }).then(()=>{
    db.collection("Blogs").get().then(info=>{
      getBlogUI(info.docs)
    });
  })
}

const updateAuthor= document.querySelector('#update-author')
const updateTitle= document.querySelector('#update-blog-title')
const updateBlogDesc= document.querySelector('#update-blog-description')
const updateForm= document.querySelector('.admin-update-form')
const update= document.querySelector('.update')


const updateBlog =(data)=>{
  let blog= data.data()
  let id= data.id
  update.style.display="block"
  updateAuthor.value= blog.author
  updateTitle.value= blog.title
  updateBlogDesc.value= blog.description
  updateForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    db.collection("Blogs").doc(id).update({
      author: updateAuthor.value,
      title: updateTitle.value,
      description: updateBlogDesc.value
    }).then(()=>{
      alert('Blog updated successfully')
    }).then(()=>{
      updateForm.reset()
      db.collection("Blogs").get().then(info=>{
        getBlogUI(info.docs)
      });
    })
    
  })
}

function editBlog(e){
  let id= e.getAttribute('id')
  console.log(id)
  db.collection("Blogs").doc(id).get().then(items=>{
    updateBlog(items)
  })
}


