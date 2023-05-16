const li2=document.querySelector('.list-group-item:nth-child(2)');
li2.style.backgroundColor='green';
const li3=document.querySelector('.list-group-item:nth-child(3)');
li3.style.display='none';
const ui=document.querySelectorAll('.list-group-item');
ui[1].style.color='green';
const odd=document.querySelectorAll('li:nth-child(odd)');
for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}