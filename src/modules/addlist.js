import render from './render.js';

export default (tasklist) => {
  const AddList = document.getElementById('addList');
  const enterBtn = document.querySelector('.enter-btn');

  //   on click enter

  enterBtn.addEventListener('click', (event) => {
    const task = AddList.value;
    const len = tasklist.length;
    const newtask = { description: task, completed: false, index: len };
    tasklist.push(newtask);

    const toString = JSON.stringify(tasklist);
    localStorage.setItem('tasklist', toString);
    render(tasklist);
    event.preventDefault();
    AddList.value = '';
  });
};
