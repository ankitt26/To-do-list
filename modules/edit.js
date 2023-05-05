export default (tasklist) => {
  const listul = document.querySelector('.list-ul');
  listul.addEventListener('click', (event) => {
    if (event.target.classList.contains('description')) {
      const listid = event.target.id;
      const edittask = document.getElementById(listid);
      edittask.setAttribute('contenteditable', 'true');

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
