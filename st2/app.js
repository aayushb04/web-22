const todoList = document.querySelector('.todo-list');
const input = document.querySelector('.main-input input');
const addBtn = document.querySelector('.add');
var todos = [];

function addTask(){
    let list = "";
    todos.forEach((todo,id)=>{
        list += `<li class="itemBox">
        <button onclick="remove(${id})">❌</button>
        <button onclick="moveUp(${id})">⬆️</button>
        <button onclick="moveDown(${id})">⬇️</button>
        <input class="todoItem" value="${todo}">
        </li>
        `
        todoList.innerHTML = list;
    })
}
function remove(id){
    todos.splice(id,1);
    addTask();
}

function moveUp(id){
    if(id>0)
        [todos[id],todos[id-1]] = [todos[id-1],todos[id]];
    addTask();
}

function moveDown(id){
    if(id<todos.length-1)
        [todos[id],todos[id+1]] = [todos[id+1],todos[id]];
    addTask();
}


function check(){
    if(input.value!=""){
        todos.push(input.value);
    }
    else
        alert('Enter a valid Todo');
    input.value = "";
    addTask();
}

addBtn.addEventListener('click',()=>check());
input.addEventListener('keydown',(e)=>{
    if(e.key === "Enter")
        check();
})