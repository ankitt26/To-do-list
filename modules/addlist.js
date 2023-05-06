import { checkCompleted } from './completelist.js';
import fetchLocal from './fetchLocal.js';
import render from './render.js';

export default () => {
  const AddList = document.getElementById('addList');
  const enterBtn = document.querySelector('.enter-btn');

  const Addtolist = () => {
    const task = AddList.value;
    const tasklist = fetchLocal();
    const len = tasklist.length;

    if (task !== '') {
      const newtask = { description: task, completed: false, index: len + 1 };
      tasklist.push(newtask);

      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);

      AddList.value = '';
      render(tasklist);
      checkCompleted(tasklist);
    }
  };

  // Add by click

  enterBtn.addEventListener('click', (event) => {
    Addtolist();
    event.preventDefault();
  });

  // Add by enter key

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      Addtolist();
      event.preventDefault();
    }
  });
};
