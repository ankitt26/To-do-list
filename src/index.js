// import _ from 'lodash';
import './style.css';

const arr = [
  { description: 'wash the dishes', completed: true, index: 0 },
  { description: 'complete To Do list project', completed: true, index: 1 },
  { description: 'Attend standup meeting', completed: true, index: 2 },
];

const ul = document.querySelector('.list-ul');

const sortIndex = arr.sort((a, b) => a.index - b.index);

sortIndex.forEach((value) => {
  const li = document.createElement('li');
  li.className = 'list-li';
  li.id = value.index;

  li.innerHTML = `<label for="list" class="description" > <input type="checkbox" name="listCheckbox" value="${value.completed}">
${value.description} </label>
  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
`;

  ul.append(li);
});
