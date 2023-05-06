import fetchLocal from './fetchLocal.js';
import render from './render.js';

export default () => {
  const all = document.querySelector('.clear');

  all.addEventListener('click', () => {
    let tasklist = fetchLocal();
    tasklist = tasklist.filter((value) => value.completed === false);

    tasklist.forEach((value, indd) => {
      value.index = indd + 1;
    });

    const toString = JSON.stringify(tasklist);
    localStorage.setItem('tasklist', toString);
    render(tasklist);
  });
};
