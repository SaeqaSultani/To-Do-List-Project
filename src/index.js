import './index.css';
import getdata from './module/getData.js';
import taskUi from './module/dataUi.js';
import setData from './module/setdata.js';

const add = document.getElementById('plus');
// const toDoList = document.getElementById('TODO-List');
const title = document.getElementById('task');
// const checkBox = document.getElementById('checkBox');

// arrToDoList.sort((a, b) => a.index - b.index);

const tasks = getdata();
tasks.forEach((e) => {
  taskUi(e);
});

add.addEventListener('click', (e) => {
  e.preventDefault();
  const tasks = getdata();
  const titleValue = title.value;
  if (!(titleValue === '')) {
    const objTask = {
      description: titleValue,
      completed: false,
      index: tasks.length + 1,
    };

    setData(objTask);

    title.value = '';
  }
});

const deletTasksFromLocalSorage = (index) => {
  const data = getdata();
  const deleteTask = data.filter((item) => item.description !== index);
  deleteTask.forEach((toDo, index) => {
    toDo.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTask));
};

const deleteTasksFromArray = (target) => {
  if (target.classList.contains('remove')) {
    deletTasksFromLocalSorage(target.parentNode.parentNode.firstElementChild
      .lastElementChild.innerHTML);
    target.parentNode.parentNode.parentNode.remove();

    // console.log(target.parentNode.parentNode.firstElementChild
    //   .firstElementChild.nodeName);
  }
};
const manageRemove = (item) => {
  deleteTasksFromArray(item.target);
};
document.getElementById('TODO-List').addEventListener('click', manageRemove);

const EditTasksFromArray = (target) => {
  // const tasks = getdata();
  if (target.classList.contains('edit')) {
    // console.log(tasks[target.parentNode.firstElementChild.id].description);

    // const editValue = title.value;

    title.value = target.parentNode.parentNode.firstElementChild
      .lastElementChild.innerHTML;

    deletTasksFromLocalSorage(target.parentNode.parentNode.firstElementChild
      .lastElementChild.innerHTML);
    target.parentNode.parentNode.parentNode.remove();

    // tasks[target.parentNode.firstElementChild.id].description = title.value.trim();

    // localStorage.setItem('tasks',JSON.stringify(tasks));
    // window.location.reload();

    // console.log(target.parentNode.parentNode.firstElementChild
    //   .lastElementChild.innerHTML);
    // deletTasksFromLocalSorage(target.parentNode.parentNode.firstElementChild
    //   .lastElementChild.innerHTML);
    // target.parentNode.parentNode.parentNode.remove();
  }
};

const manageEdit = (item) => {
  EditTasksFromArray(item.target);
};
document.getElementById('TODO-List').addEventListener('click', manageEdit);