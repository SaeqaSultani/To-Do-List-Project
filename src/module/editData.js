import getdata from './getData.js';

let currentText = null;

// function get current value from input
function currentValue(event) {
  currentText = event.value;
}
// function edit task of list
function editValue(event) {
  const data = getdata();
  const text = event.value;
  if (!(text === '')) {
    data.forEach((task) => {
      if (task.description === currentText) {
        task.description = text;
      }
    });
  }
  // update local storage
  localStorage.setItem('tasks', JSON.stringify(data));
}

export { currentValue, editValue };
