const checkCompleted = (tasklist) => {
  tasklist.forEach((value) => {
    const cId = `check${value.index}`;
    const descId = `desc${value.index}`;

    if (value.completed === true) {
      const completed = document.getElementById(cId);
      completed.checked = true;
      //   add line through
      const checkItem = document.getElementById(descId);
      checkItem.classList.add('checked');
    } else if (value.completed === false) {
      const completed = document.getElementById(cId);
      completed.checked = false;
      const checkItem = document.getElementById(descId);
      checkItem.classList.remove('checked');
    }
  });
};

const updateCheck = (tasklist) => {
  document.addEventListener('change', (event) => {
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
