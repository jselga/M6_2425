const todos=[];

window.onload=()=>  {
const form = document.getElementById('todo-form');
form.onsubmit = (e)=>{
    //Hem d'afegir prevent default per prevenir que la nostra aplicació es refresqui
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value ='';
    todos.push(todoText);
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML='';
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += '<li>' +todos[i] +'</li>'
        
    }
    
}
}


