import './index.css';
import getdata from './module/getData.js';
import taskUi from './module/dataUi.js';
import setData from './module/setdata.js';

const add = document.getElementById('plus');
const clearAll = document.getElementById('clear');
const title = document.getElementById('task');
const items = document.getElementsByClassName('items');
const text = document.getElementsByClassName('text');
const form = document.getElementsByClassName('.form');
const reload = document.getElementById('reload');


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


let count = 1;
const check = (target) => {
  target.classList.toggle('changeBg');
  const tasks = getdata();
  const empty = [];
  const hammasi = document.querySelectorAll('.checkBox');
  for (let i = 0; i < tasks.length; i += 1){
    if (hammasi[i].classList.contains('changeBg')) {
      tasks[i].completed = true;
      // target.text.style = "in-linght"
          count += 1; 
    }else{
      tasks[i].completed = false;
    }

      empty.push(tasks[i]);
      localStorage.setItem('tasks', JSON.stringify(empty));
  }
  
};

const CheckManage = (item) => {
  check(item.target);
};
document.getElementById('TODO-List').addEventListener('click', CheckManage);

const clean = (index) => {
  const data = getdata();
  const deleteTask = data.filter((item) => item.completed === false);
  deleteTask.forEach((toDo, index) => {
    toDo.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTask));
};

 clearAll.addEventListener('click',(e) =>{
  const data = getdata();
  for (let i = 0; i < data.length; i += 1) {
    if(data[i].completed === true){
      clean(e.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.
        nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.
        firstElementChild.firstElementChild.innerHTML);
         e.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.
         nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.remove();
    }
  }
 
  
    // console.log(e.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.
    //   nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.
    //   firstElementChild.firstElementChild.nodeName);
 })

 reload.addEventListener('click',() =>{
  window.location.reload();
 })