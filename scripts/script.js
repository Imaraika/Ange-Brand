function toggle(x) {
    elMenu = document.querySelector('.nav');
    x.classList.toggle('change');
    elMenu.classList.toggle('change');
  }
  function logOut(){
    firebase.auth().signOut();
  }
