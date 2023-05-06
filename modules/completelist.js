import fetchLocal from './fetchLocal.js';

const checkCompleted = () => {
  const tasklist = fetchLocal();
  tasklist.forEach((value) => {
    const cId = `check${value.index}`;
    const descId = `desc${value.index}`;

    if (value.completed === true) {
      const completed = document.getElementById(cId);
      completed.checked = true;

      //   add line through
      const checkItem = document.getElementById(descId);
      checkItem.classList.add('checked');
      checkItem.setAttribute('contenteditable', 'false');
    } else if (value.completed === false) {
      const completed = document.getElementById(cId);
      completed.checked = false;

      //   Remove line through
      const checkItem = document.getElementById(descId);
      checkItem.classList.remove('checked');
      checkItem.setAttribute('contenteditable', 'true');
    }
  });
};

const updateCheck = () => {
  document.addEventListener('change', (event) => {
    const tasklist = fetchLocal();
    const checkId = event.target.id;

    tasklist.forEach((value) => {
      const taskId = `check${value.index}`;

      if (taskId === checkId) {
        value.completed = !value.completed;
      }
      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);
      checkCompleted(tasklist);
    });
  });
};

export { checkCompleted, updateCheck };
