let tasks = [];

function addTask() {
  const taskText = document.getElementById('taskInput').value;
  const taskTime = document.getElementById('taskTime').value;

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const task = {
    text: taskText,
    time: taskTime,
    completed: false
  };

  tasks.push(task);
  renderTasks();
  document.getElementById('taskInput').value = '';
  document.getElementById('taskTime').value = '';
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const text = document.createElement('span');
    text.innerHTML = `${task.text} <br><small>${task.time}</small>`;

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.onclick = () => toggleComplete(index);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(index);

    buttons.append(doneBtn, editBtn, deleteBtn);
    li.append(text, buttons);
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  const newTime = prompt("Edit date & time:", tasks[index].time);
  if (newText !== null) tasks[index].text = newText;
  if (newTime !== null) tasks[index].time = newTime;
  renderTasks();
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}