// import taskUi from './dataUi.js';
import getdata from './getData.js';

const setData = (task) => {
  const arrTask = getdata();
  arrTask.push(task);

  localStorage.setItem('tasks', JSON.stringify(arrTask));

  // taskUi(task);
};

export default setData;