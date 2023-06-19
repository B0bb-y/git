document.getElementById('input').addEventListener('submit' , onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // var name = document.getElementById('name').value;
    // var email = document.getElementById('email').value;

    axios.post('https://crudcrud.com/api/5468d56601434594a063e3b0ff1ba98d/savingData',{
            name : document.getElementById('name').value,
            email : document.getElementById('email').value

        })

}
function editUser(email) {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    var index = existingUsers.findIndex(function(user) {
      return user.email === email;
    });
  
    if (index !== -1) {
      var user = existingUsers[index];
      document.getElementById('name').value = user.name;
      document.getElementById('email').value = user.email;
  
      // Remove the user from the existingUsers array
      existingUsers.splice(index, 1);
  
      // Update the user data in local storage
      localStorage.setItem('users', JSON.stringify(existingUsers));
  
      // Update the user list display
      updateUserList(existingUsers);
    }
  }
  
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
  document.getElementById('input').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    var user = {
      name: name,
      email: email
    };
  
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists in the user list
    var index = existingUsers.findIndex(function(user) {
      return user.email === email;
    });
  
    if (index === -1) {
      // Add the new user to the existingUsers array
      existingUsers.push(user);
    } else {
      // Update the existing user data
      existingUsers[index] = user;
    }
  
    // Save the updated user data in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  
    // Update the user list display
    updateUserList(existingUsers);
  });
  function updateUserList(users) {
    var listElement = document.getElementById('list');
    listElement.innerHTML = '';
  
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      var listItem = document.createElement('li');
      listItem.textContent = user.name + ' ' + user.email;
      listElement.appendChild(listItem);
  
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.setAttribute('data-email', user.email);
      editButton.addEventListener('click', function() {
        var email = this.getAttribute('data-email');
        editUser(email);
      });
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute('data-email', user.email);
      deleteButton.addEventListener('click', function() {
        var email = this.getAttribute('data-email');
        deleteUser(email);
      });
  
      listItem.appendChild(deleteButton);
      listItem.appendChild(editButton);
    }
  }
  
  