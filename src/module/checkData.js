import getdata from './getData.js';

function checkBoxValue(event) {
  const data = getdata();
  data.forEach((task) => {
    if (task.description === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  event.nextElementSibling.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(data));
}

export default checkBoxValue;