import getdata from './getData.js';

const deletTasksFromLocalSorage = (event) => {
  const data = getdata();
  const deleteTask = data.filter((item) => item.description !== event);
  deleteTask.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteTask));
};

export default deletTasksFromLocalSorage;