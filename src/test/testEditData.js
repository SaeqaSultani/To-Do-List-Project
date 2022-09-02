import getdata from '../module/getData.js';

let currentText = null;

// function get current value from input
function testCurrentValue(event) {
  currentText = event;
}
// function edit task of list
function testEditValue(event) {
  const data = getdata();
  const text = event;
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

export { testCurrentValue, testEditValue };
