let addTodoForm = document.querySelector('.add-todo');

let todoInput = document.querySelector('input');

let listContainer = document.querySelector('.list-container');

//ol is parent(listCntainer)
listContainer.addEventListener('click', function(event){
      //event happens allover parent, but i want to restrict it to delete btn only
      //just btn , not text
      const el= event.target;
      if(el.tagName == 'BUTTON'){
        //delete
        if(el.classList.contains('delete')){
            el.parentNode.remove();
        }
        else{
            //mark done
            el.parentNode.style.textDecoration= 'line-through';
        }
      }
});

function appendTodoItem(text){
     const li = document.createElement('li');
     li.classList.add('todo-item');
     li.textContent =text;
     listContainer.append(li);
     
     const btn= document.createElement('button');
     btn.textContent= 'Delete';
     btn.classList.add('delete');
     li.appendChild(btn);

     const btn2= document.createElement('button');
     btn2.textContent= 'Mark as complete';
     btn2.classList.add('mark');
     li.appendChild(btn2);
}

addTodoForm.addEventListener('submit', function(event){

    let value= todoInput.value;

    if (value !== ""){
        appendTodoItem(value);
        todoInput.value="";
    }
});



