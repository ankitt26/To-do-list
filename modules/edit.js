export default (tasklist) => {
  const listul = document.querySelector('.list-ul');
  listul.addEventListener('click', (event) => {
    if (event.target.classList.contains('description')) {
      const listid = parseInt(event.target.id, 12);
      const edittask = document.getElementById(listid);
      edittask.setAttribute('contenteditable', 'true');

      tasklist.forEach((value) => {
        if (value.index === listid) {
          value.description = edittask.innerText;
        }
      });

      const toString = JSON.stringify(tasklist);
      localStorage.setItem('tasklist', toString);
    }
  });
};
