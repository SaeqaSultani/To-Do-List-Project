import './index.css';
import Sortable from 'sortablejs';
import getdata from './module/getData.js';
import taskUi from './module/dataUi.js';
import setData from './module/setdata.js';
import Tasks from './module/classData.js';

const add = document.getElementById('plus');
const clearAll = document.getElementById('clear');
const title = document.getElementById('task');
const reload = document.getElementById('reload');
const toDoList = document.querySelectorAll('.TODO-List');

let currentText = null;

const data = getdata();


data.forEach((e) => {
  taskUi(e);
});

// function reload list
reload.addEventListener('click', () => {
  
  data.forEach((task) => {
    task.completed = false;
  });
  localStorage.setItem('tasks', JSON.stringify(data));
  window.location.reload();
});

// function add task to list
add.addEventListener('click', (e) => {
  e.preventDefault();
  
  const titleValue = title.value;
  if (!(titleValue === '')) {
    const objTask = new Tasks(titleValue, false, data.length + 1);

    setData(objTask);

    title.value = '';
  }
});

// function get current value from input
window.getCurrentTask = (event) => {
  currentText = event.value;
};

// function edit task of list
window.editTask = (event) => {
  
  // check if task is empty
  if (event.value === '') {
    event.value = currentText;
    return;
  }
  // task already exist
  data.forEach((task) => {
    if (task.description === event.value) {
      event.value = currentText;
    }
  });
  // update task
  data.forEach((task) => {
    if (task.description === currentText) {
      task.description = event.value;
    }
  });
  // // update local storage
  localStorage.setItem('tasks', JSON.stringify(data));
};

// function checkbox
window.taskCheckbox = (event) => {
  
  data.forEach((task) => {
    if (task.description === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  event.nextElementSibling.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(data));
};

// function remove task from list
const deletTasksFromLocalSorage = (event) => {
 
  const deleteTask = data.filter((item) => item.description !== event);
  deleteTask.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTask));
};

const deleteTasksFromArray = (target) => {
  if (target.classList.contains('remove')) {
    deletTasksFromLocalSorage(target.parentNode.firstElementChild
      .lastElementChild.value);
    target.parentNode.parentNode.remove();

  }
};
const manageRemove = (item) => {
  deleteTasksFromArray(item.target);
};
document.getElementById('TODO-List').addEventListener('click', manageRemove);

// clearAll tasks
clearAll.addEventListener('click', () => {

  const deleteAll = data.filter((item) => item.completed === false);
  deleteAll.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteAll));
  window.location.reload();
});

// drag and drop function

toDoList.forEach((item) => {
  const sort = new Sortable(item, {
    group: 'shared',
    animation: 150,
    ghostClass: 'blue-background-class',
  });
  sort.init();
});
