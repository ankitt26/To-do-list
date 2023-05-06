import fetchLocal from './fetchLocal.js';

export default () => {
  const listul = document.querySelector('.list-ul');
  let tasklist;
  listul.addEventListener('keydown', (event) => {
    tasklist = fetchLocal();

    if (event.target.classList.contains('description')) {
      const listid = event.target.id;
      const edittask = document.getElementById(listid);
      // edittask.setAttribute("contenteditable", "true");

      tasklist.forEach((value) => {
        const taskId = `desc${value.index}`;
        if (taskId === listid) {
          value.description = edittask.innerText;
        }
      });

      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);
    }
  });
};
