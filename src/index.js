document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', (event) => {
    addTask(event.target['new-task-description'].value, event.target.priority.value);
    event.preventDefault();
  });
});

function addTask(task, priority) {
  const newTask = document.createElement('li');
  const doneButton = document.createElement('button');
  let taskList;
  doneButton.addEventListener('click', removeTask);
  doneButton.textContent = ' done ';
  if (priority === '1') {
    newTask.style.color = 'red';
    newTask.className = 1;
  } else if (priority === '2') {
    newTask.style.color = 'blue';
    newTask.className = 2;
  } else {
    newTask.className = 3;
  }
  newTask.textContent = `${task}  `;
  newTask.append(doneButton);
  document.getElementById('tasks').append(newTask);
  document.getElementById('create-task-form').reset();
  //taskList = document.getElementById('tasks').getElementsByClassName('high');
  taskList = (document.getElementById('tasks'));
  sortTasks(taskList);
}

function removeTask(e) {
  e.target.parentNode.remove();
}

function sortTasks(taskList) {
  let lastHigh = 0;
  // console.log(taskList.length);
  // console.log(taskList);
  // console.log(taskList.getElementsByClassName('high')[0].textContent);
  // console.log(taskList.getElementsByClassName('high').length);
  // console.log(taskList.querySelectorAll('li'));
  // console.log(taskList.querySelectorAll('li').length);
  const taskItems = taskList.querySelectorAll('li').length;
  let lastItem = taskList.querySelectorAll('li')[taskItems - 1];
  let lastItemPriority = lastItem.className;
  console.log(lastItem);
  console.log(lastItemPriority);
  if (taskItems === 1) {
    return;
  } else if (taskItems > 1 && lastItemPriority === '2') {
    taskList.querySelectorAll('li').forEach(element => {
      if (element.className === '1') {
        lastHigh++;
        //console.log(`lastHigh: ${lastHigh}`);

      }
      // pop - run first to remove last element
      // splice - (start, deletecount [put 0], item) 
      // console.log(element.className);
    });
  }
}