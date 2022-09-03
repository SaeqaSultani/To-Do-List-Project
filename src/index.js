import './index.css';
import getdata from './module/getData.js';
import taskUi from './module/dataUi.js';
import addData from './module/addData.js';
import deletTasksFromLocalSorage from './module/deleteData.js';
import { currentValue, editValue } from './module/editData.js';
import checkBoxValue from './module/checkData.js';
import clearAllData from './module/clearAllData.js';

const add = document.getElementById('plus');
const clearAll = document.getElementById('clear');
const title = document.getElementById('task');
const reload = document.getElementById('reload');

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
  addData(titleValue);
  title.value = '';
});

// function get current value from input
window.getCurrentTask = (event) => {
  currentValue(event);
};

// function edit task of list
window.editTask = (event) => {
  editValue(event);
};

// function checkbox
window.taskCheckbox = (event) => {
  checkBoxValue(event);
};

// function remove task from list
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
  clearAllData();
  window.location.reload();
});
