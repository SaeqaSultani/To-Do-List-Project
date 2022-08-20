import taskUi from './dataUi.js';
import getdata from './getData.js';

const arrtask = [];

const setData = (task) => {


  arrtask.push(task);

  localStorage.setItem('tasks', JSON.stringify(arrtask));

 taskUi(task);
};

export{setData,arrtask} ;