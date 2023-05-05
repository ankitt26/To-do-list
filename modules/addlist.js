import { checkCompleted } from './completelist.js';
import render from './render.js';

export default (tasklist) => {
  const AddList = document.getElementById('addList');
  const enterBtn = document.querySelector('.enter-btn');

  //   on click enter

  enterBtn.addEventListener('click', (event) => {
    const task = AddList.value;
    const len = tasklist.length;

    if (task !== '') {
      const newtask = { description: task, completed: false, index: len + 1 };
      tasklist.push(newtask);

      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);

      event.preventDefault();
      AddList.value = '';
      render(tasklist);
      checkCompleted(tasklist);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const task = AddList.value;
      const len = tasklist.length;

      if (task !== '') {
        const newtask = { description: task, completed: false, index: len + 1 };
        tasklist.push(newtask);

        const toString = JSON.stringify(tasklist);
        localStorage.setItem('tasklist', toString);

        event.preventDefault();
        AddList.value = '';
        render(tasklist);
        checkCompleted(tasklist);
      }
    }
  });
};
