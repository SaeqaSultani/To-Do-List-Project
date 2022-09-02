import getdata from '../module/getData.js';

function testCheckBoxValue(event) {
  const data = getdata();
  data.forEach((task) => {
    if (task.completed !== event) {
      task.completed = event;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(data));
}

export default testCheckBoxValue;