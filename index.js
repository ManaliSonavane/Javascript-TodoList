/*
let addBtn = document.querySelector('#add');
let delTodoBtn = document.querySelector('.todo-item > .delete'); 
let markTodoBtn = document.querySelector('.todo-item > .mark');
*/

let addTodoForm = document.querySelector('.add-todo');

let todoInput = document.querySelector('input');

let listContainer = document.querySelector('.list-container');

/*what if i enter value and press enter, click doesn't happen here //if button is not inside form
  can work with any button
  
  addBtn.addEventListener('click', function(){});
*/

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

/*function createBtn(text){
    const btn = document.createElement("button");
    btn.textContent(text);
    return btn;
}*/

function appendTodoItem(text){
     const li = document.createElement('li');
     //pre-defined fn -- adds class todo-item to newly created li 
     li.classList.add('todo-item');
     li.textContent =text;
     listContainer.append(li);
      
     //adding delete btn
     
     const btn= document.createElement('button');
     btn.textContent= 'Delete';
     btn.classList.add('delete');
     li.appendChild(btn);

     //adding complete btn
     const btn2= document.createElement('button');
     btn2.textContent= 'Mark as complete';
     btn2.classList.add('mark');
     li.appendChild(btn2);
    

     /*const btn = createBtn("Delete");
     li.appendChild(btn);

     const btn2 = createBtn("Mark as complete");
     li.appendChild(btn2); */

}




//form (more readable/understandable)
//restricted to forms

addTodoForm.addEventListener('submit', function(event){
    event.preventDefault();
    //this -> current element -> i.e. form
    //add input value in todo lost

    let value= todoInput.value;
    //console.log(value);

    if (value !== ""){
        appendTodoItem(value);
        //value clear in input field after adding to list
        todoInput.value="";
    }
   
   // this['todo-list'].value //current form's input
   
   

});



