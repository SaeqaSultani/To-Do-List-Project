import delet from '../images/delete.png';

const taskUi = (task) => {
  const icDelete = new Image();
  icDelete.src = delet;
  icDelete.classList.add('remove');
  const toDoList = document.getElementById('TODO-List');
  const divParent = document.createElement('div');
  divParent.classList.add('div-container');
  divParent.setAttribute('draggable', 'true');

  divParent.innerHTML += `
                            <div class="items">
                                  <div class="elements">
                                      <input type="checkbox" onclick="taskCheckbox(this)" class="check" ${task.completed ? 'checked' : ''}>
                                      <input type="text" value="${task.description}" class="input ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)"  onblur="editTask(this)">
                                  </div>
                                  <img class="remove" src="${delet}" alt="reload">
                            </div>
                            <hr>
                         `;
  toDoList.appendChild(divParent);
  return toDoList;
};

export default taskUi;
