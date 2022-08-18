import './index.css';
import more from './images/more.png';

const toDoList = document.getElementById('TODO-List');

const arrToDoList = [
  {
    description: 'homework',
    completed: true,
    index: 2,
  },
  {
    description: 'lunch',
    completed: false,
    index: 1,
  },
  {
    description: 'play',
    completed: true,
    index: 4,
  },
  {
    description: 'drink coffee',
    completed: false,
    index: 3,
  },
];

arrToDoList.sort((a, b) => a.index - b.index);

arrToDoList.forEach((element) => {
  const IconMore = new Image();
  IconMore.src = more;
  IconMore.classList.add('icon');

  const div = `
               <div>
                <div class="items">
                    <div class="elements">
                        <input class="checkBox" type="checkbox"  id="vehicle1" name="vehicle1" value="" ${element.completed ? 'checked' : ''}>
                        <h2 class="title">${element.description}</h2>
                    </div>
                    <img class="icon" src="${more}" alt="reload">
                </div>
                <hr>
                </div>`;

  toDoList.innerHTML += div;
});