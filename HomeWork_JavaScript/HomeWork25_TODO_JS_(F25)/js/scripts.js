const todoInput = document.querySelector("#todo-creation");
const createBtn = document.querySelector("#create-todo-button");
const outputTodo = document.querySelector("#output");

const storageTodos = JSON.parse(localStorage.getItem("todos"));

let todos = storageTodos && storageTodos.length !==0 ? storageTodos : [{text: "Test", done: true}];


renderTodos(todos);

createBtn.onclick = () => {
   if (todoInput.value) {
      const todo = {
         text: todoInput.value,
         done: false
      }

   todoInput.value = "";
   todos.push(todo);
   renderTodos(todos);
   }
}

function renderTodos (todosToRender) {
   outputTodo.innerHTML = "";
   todosToRender.forEach((todo, i) => {
      outputTodo.innerHTML += `
      <div class="todos-container">
         <div class="todo ${todo.done && "done"}">
         <label>
         <span>${i + 1}. </span>
            <span>${todo.text}</span>
            <input type="checkbox" ${todo.done && "checked"} class="todo-checkbox">
         </label>
         </div>   
         <button class="delete-button">Delete</button>
      </div>
      `
   });

   localStorage.setItem("todos", JSON.stringify(todos));

   const checkboxes = [...document.querySelectorAll(".todo-checkbox")];
   const  deleteBtn = [...document.querySelectorAll(".delete-button")];

   checkboxes.forEach((checkbox, i) => {
      checkbox.onchange = () => {
         const todo = todos[i];
         changeTodo(todo.text, !todo.done);
      }
   });

   deleteBtn.forEach( (button, i) => {
      button.onclick = () => {
         const todo = todos[i];
         deleteTodo(todo.text);
      }
   }); 
}

function changeTodo (text, newDone) {
   todos = todos.map((todo) => {
      if (text === todo.text) {
         return todo = {text, done: newDone}
      }
      return todo;
   })
   renderTodos(todos);
}

function deleteTodo (text) {
   todos = todos.filter((todo) => todo.text !== text);
   renderTodos(todos);
}


