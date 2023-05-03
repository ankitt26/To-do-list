import render from './render.js';

export default (tasklist) => {
  const listul = document.querySelector('.list-ul');
  listul.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa')) {
      const listid = parseInt(event.target.id, 12);

      tasklist = tasklist.filter((value) => value.index !== listid);
      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);
      render(tasklist);
    }
  });
};
