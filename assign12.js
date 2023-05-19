document.getElementById('input').addEventListener('submit',function(e){
    e.preventDefault();

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;

    var user={
        name: name,
        email: email
    }
    var existuser=JSON.parse(localStorage.getItem('users'))||[];
    existuser.push(user);
    localStorage.setItem('users',JSON.stringify(existuser));
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    updateUserList(existuser);
});
function deleteUser(email) {
    var existuser = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the index of the user with the specified email
    var index = existuser.findIndex(function(user) {
      return user.email === email;
    });
  
    if (index !== -1) {
      // Remove the user from the existingUsers array
      existuser.splice(index, 1);
  
      // Update the user data in local storage
      localStorage.setItem('users', JSON.stringify(existuser));
  
      // Update the user list display
      updateUserList(existuser);
    }
  }
function updateUserList(users){
    var listElement=document.getElementById('list');
    listElement.innerHTML='';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var listItem = document.createElement('li');
        listItem.textContent = user.name + '  '+ user.email;
        listElement.appendChild(listItem);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('data-email', user.email);
        deleteButton.addEventListener('click', function() {
            var email = this.getAttribute('data-email');
            deleteUser(email);
        });
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    }
};
var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
updateUserList(storedUsers);
