// Function to add a new todo
function addTodo() {
  let todoInput = document.getElementById('todoInput').value;
  if (todoInput) {
    let todo = {
      task: todoInput,
      status: 0  // 0 for unfinished, 1 for finished
    };

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
    document.getElementById('todoInput').value = '';
  }
}

// Function to display the todo list
function displayTodos() {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  let todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let li = document.createElement('li');
    li.textContent = todo.task;

    if (todo.status === 1) {
      li.classList.add('completed');
    }

    let completeButton = document.createElement('button');
    completeButton.textContent = 'Ferdig';
    completeButton.onclick = function() {
      todo.status = 1;
      localStorage.setItem('todos', JSON.stringify(todos));
      displayTodos();
    };

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Slett';
    deleteButton.onclick = function() {
      todos = todos.filter((t, index) => index !== i);
      localStorage.setItem('todos', JSON.stringify(todos));
      displayTodos();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
}

// Call the displayTodos function to initially display any existing todos
displayTodos();
