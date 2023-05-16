var newDiv = document.createElement('div');
newDiv.className='divclass';
newDiv.id='divid';
newDiv.setAttribute=('title','divtitle');
var newDivtext = document.createTextNode('Hello');
newDiv.appendChild(newDivtext);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
// insertion in list
var li =document.createElement('li');
var litext=document.createTextNode('Hello');
li.className='list-group';
li.appendChild(litext);
var list=document.getElementById('items');
var list1=list.firstChild;
console.log(li);
list.insertBefore(li,list1);