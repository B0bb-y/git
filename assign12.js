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
function updateUserList(users){
    var listElement=document.getElementById('list');
    listElement.innerHTML='';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var listItem = document.createElement('li');
        listItem.textContent = user.name + '  '+ user.email;
        listElement.appendChild(listItem);
    }
};
var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    updateUserList(storedUsers);
