import getdata from './getData.js';

function clearAllData() {
  const data = getdata();
  const deleteAll = data.filter((item) => item.completed === false);
  deleteAll.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(deleteAll));
}

export default clearAllData;