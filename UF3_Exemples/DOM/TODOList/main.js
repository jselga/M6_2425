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
    const todosTemplate = todos.map( element=> '<li>' + element+'</li>');
    console.log(todosTemplate);
    todoList.innerHTML = todosTemplate.join('');
    

    
    
}
}


