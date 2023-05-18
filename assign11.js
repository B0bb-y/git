var user={
    name:'rahul',
    email:'rahul@gmail.com',
    age:20
}
localStorage.setItem('user',JSON.stringify(user));
var storeduser= JSON.parse(localStorage.getItem('user'));
console.log(storeduser.name);
console.log(storeduser.age);