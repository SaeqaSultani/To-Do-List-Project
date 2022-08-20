import './index.css';
import more from './images/more.png';
import getdata from './module/getData';
import taskUi from './module/dataUi';
import Tasks from './module/classData';
import {setData,arrtask} from './module/setdata';

const add = document.getElementById('plus');
const toDoList = document.getElementById('TODO-List');
let title = document.getElementById('task');
const checkBox = document.getElementById('checkBox');


// arrToDoList.sort((a, b) => a.index - b.index);

const tasks = getdata();
tasks.forEach((e) =>{
  taskUi(e);
})

add.addEventListener('click', (e) => {
  e.preventDefault();
  const titleValue = title.value;
  const objTask = new Tasks(titleValue,checkBox,arrtask.length +1);
  if (!(titleValue === '')) {
      setData(objTask);
  }
});

const deletTasksFromLocalSorage = (index) => {
  const data = getdata();
  const deleteTask = data.filter((item) => item.description !== index);
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
  if (target.classList.contains('edit')) {

    title.value = target.parentNode.parentNode.firstElementChild
    .lastElementChild.innerHTML;

    deletTasksFromLocalSorage(target.parentNode.parentNode.firstElementChild
      .lastElementChild.innerHTML);
    target.parentNode.parentNode.parentNode.remove();
  
  }
};

const manageEdit = (item) => {
  EditTasksFromArray(item.target);
};
document.getElementById('TODO-List').addEventListener('click', manageEdit);