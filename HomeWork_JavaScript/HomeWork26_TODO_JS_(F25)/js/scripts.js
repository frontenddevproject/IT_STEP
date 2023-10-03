

const todoInput = document.querySelector("#todo-creation");
const createBtn = document.querySelector("#create-todo-button");
const outputTodo = document.querySelector("#todos-output");
const outputUser = document.querySelector("#users-output");
const clearUserBtn = document.querySelector("#clear-current-user")
const searchTodoInput = document.querySelector("#todo-search");
const clearSearchBtn = document.querySelector("#clear-search-btn");
const scrollBtnUp = document.querySelector(".scroll-up");
const scrollBtnDown = document.querySelector(".scroll-down");

const storageTodos = JSON.parse(localStorage.getItem("todos"));

let todos = storageTodos && storageTodos.length !==0 ? storageTodos : [{text: "Test", done: true}];
let users = [];
let currentUser = undefined;
renderTodos(todos);

createBtn.onclick = () => {
   if (todoInput.value) {
      const todo = {
         text: todoInput.value,
         done: false,
         id: todos.length + 1
      }

   todoInput.value = "";
   todos.push(todo);
   renderTodos(todos);
   console.log(todos)
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
            <input id="${todo.id}" type="checkbox" ${todo.done && "checked"} class="todo-checkbox">
         </label>
         </div>   
         <img id="${todo.id}" class="delete-button" src="icons/delete_todo.png"  width="24" height="24" alt="Press to Delete">
      </div>
      `
   });

   localStorage.setItem("todos", JSON.stringify(todos));

   const checkboxes = [...document.querySelectorAll(".todo-checkbox")];
   const  deleteBtn = [...document.querySelectorAll(".delete-button")];

   checkboxes.forEach((checkbox, i) => {
      checkbox.onchange = () => {
         const todo = todos.find((todo) => todo.id === +checkbox.id );
         changeTodo(todo.id, !todo.done);
      }
   });

   deleteBtn.forEach( (button, i) => {
      button.onclick = () => {
         const todo = todos.find((todo) => todo.id === +button.id );
         deleteTodo(todo.text);
      }
   }); 
}

function changeTodo (id, newDone) {
   todos = todos.map((todo) => {
      if (todo.id === id) {
         return todo = {...todo, done: newDone}
      }
      return todo;
   })
   renderTodos(
      currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
   );
}

function deleteTodo (text) {
   todos = todos.filter((todo) => todo.text !== text);
   renderTodos(
      currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
   );
}

function getServerTodos () {
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoFromServer => {
         todoFromServer.forEach((todo) => { 
             todo.text = todo.title;
             delete todo.title; 
             todo.done = todo.completed;
             delete todo.completed; 
         });
         console.log(todoFromServer);
      
      todos = todoFromServer;
      renderTodos(todos);
      })
}
getServerTodos();

function getServerUsers () {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersFromServer => {
         console.log(usersFromServer);
         users = usersFromServer;
         renderUsers();
      })
}
getServerUsers();

function renderUsers () {
   outputUser.innerHTML = "";
   users.forEach((user) => {
   outputUser.innerHTML += `
      <button class="user-todos-button">${user.name}</button> 
   `
   })
   // outputUser.innerHTML +=`<button id="clear-current-user">Clear current user</button>`

   const userButtons = [...document.querySelectorAll(".user-todos-button")];

   userButtons.forEach((button, i) => {
   button.onclick = (event) => {
      currentUser = users[i];
      searchTodoInput.value = ""
      console.log(currentUser);
      const currentTodos = todos.filter( (todo) => (i + 1) !== +todo.userId ? todos.userId : []);
      console.log(currentTodos)
      renderTodos(currentTodos);
      clearUserBtn.disabled = false;
      userButtons.forEach((btn) => btn.classList.remove("active-user-button"));
      event.target.classList.add("active-user-button");
      }
      
   })
}
clearUserBtn.disabled = true;
clearUserBtn.onclick = () => {
   currentUser = undefined;
   clearUserBtn.disabled = true;
   searchTodoInput.value = ""
   renderUsers(users);
   renderTodos (todos);   
}

searchTodoInput.oninput = (event) => {
   let searchedTodo = currentUser 
   ? todos.filter((todo) => todo.text.includes(event.target.value) && todo.userId === currentUser.id) 
   : todos.filter((todo) => todo.text.includes(event.target.value));
   renderTodos(searchedTodo);
}
clearSearchBtn.onclick = () => {
   searchTodoInput.value = "";
   renderTodos(
      currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
   );
}

scrollBtnUp.onclick = () => {
   todoInput.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
   })
}
scrollBtnDown.onclick = () => {
   outputTodo.scrollIntoView({
      block: "end",
      inline: "nearest",
      behavior: "smooth"
   })
}