document.getElementById('input').addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    alert('data stored');
    var storedName = localStorage.getItem('name');
    var storedEmail = localStorage.getItem('email');

    // Use the retrieved values as needed
    console.log(storedName);
    console.log(storedEmail);

});