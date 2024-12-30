const todoInput= document.getElementById('todo-input');
const addTodoButton= document.getElementById('add-todo-button');
const todoContainer= document.getElementById('todo-container');




addTodoButton.addEventListener("click", ()=>{
   let task=todoInput.value.trim();
   console.log(task);
if(task){
    const todoItem= document.createElement("h1");
    todoItem.className= 'todo-item';

    const taskText=document.createTextNode(task)
  
    const deleteButton= document.createElement("button");
    deleteButton.textContent="Delete";

    todoItem.appendChild(taskText);
    todoItem.appendChild(deleteButton);
    todoContainer.appendChild(todoItem);
    todoInput.value = '';

    deleteButton.addEventListener('click',(e)=>{
       todoContainer.removeChild(todoItem);
        console.log(" deleted ", todoItem.innerText)

    })



    

    
}else{
    alert("Please Enter A task:  ")
} 



}) 
