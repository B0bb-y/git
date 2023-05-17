var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    //value fetched from input and item created in list
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    //delete button added
    var delbutton=document.createElement('button');
    delbutton.className="btn btn-danger btn-sm float-right delete";
    delbutton.appendChild(document.createTextNode("DELETE"));
    li.appendChild(delbutton);
    //edit button added
    var edit=document.createElement('button');
    edit.className="btn btn-danger btn-sm float-right delete";
    edit.appendChild(document.createTextNode('EDIT'));
    li.appendChild(edit);
    itemList.appendChild(li);
}
//remove function created for deletion of list
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm("be sure")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
