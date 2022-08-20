import delet from '../images/delete.png';
import edit from '../images/edit.png';

const toDoList = document.getElementById('TODO-List');

const taskUi = (task) => {

  const icDelete = new Image();
  const icEdit = new Image();
  icDelete.src = delet;
  icEdit.src = edit;
  icDelete.classList.add('remove');
  icEdit.classList.add('edit');

  toDoList.innerHTML += `<div class="div">
                              <div class="items">
                                  <div class="elements">
                                      <input class="checkBox" type="checkbox"  id="checkBox" name="vehicle1" value="${task.completed ? 'checked' : ''}">
                                      <p>${task.description}</p>
                                  </div>
                                  <div class="popup">
                                      <img class="edit" id="edit" src="${edit}" alt="reload">
                                        <hr>
                                      <img class="remove" id="remove" src="${delet}" alt="reload">
                                  </div>
                                  </div>
                                  <hr>
                            </div> 
                         `;
};

export default taskUi;





                        