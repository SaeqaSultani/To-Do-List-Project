import Tasks from './classData.js';
import getdata from './getData.js';
import setData from './setdata.js';

const addData = (text) => {
  const data = getdata();

  if (!(text === '')) {
    const objTask = new Tasks(text, false, data.length + 1);

    setData(objTask);
  }
};

export default addData;
