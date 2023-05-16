const items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='lightgrey';
}
const li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
         li[i].style.fontWeight='bold';
    }