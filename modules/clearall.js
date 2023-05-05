import render from './render.js';

export default (tasklist) => {
  const all = document.querySelector('.clear');

  all.addEventListener('click', () => {
    tasklist = tasklist.filter((value) => value.completed === false);

    tasklist.forEach((value, indd) => {
      value.index = indd + 1;
    });

    const toString = JSON.stringify(tasklist);
    localStorage.setItem('tasklist', toString);
    render(tasklist);
  });
};
