function todoList() {
    var item = document.getElementById('todoInput').value;
    document.getElementById('todoInput').value="";
    var text = document.createTextNode(item);
    var button = document.createElement('input');
                                                                        
    button.type = "button";
    button.name = "name";
    button.value = "Delete";
    button.classList.add ("btn");
    var newItem = document.createElement("div");
  
    newItem.appendChild(text);
    newItem.appendChild(button);
    document.getElementById("todoList").appendChild(newItem)
    button.addEventListener('click', (e) =>{
      newItem.removeChild(text)
    })
    button.addEventListener('click', (e) =>{
      newItem.removeChild(button)
    })
  }