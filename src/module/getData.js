const getdata = () => {
  const datas = JSON.parse(localStorage.getItem('tasks')) || [];

  return datas;
};

export default getdata;