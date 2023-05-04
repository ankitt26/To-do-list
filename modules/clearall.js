export default () => {
  const all = document.querySelector('.clear');
  const ul = document.querySelector('.list-ul');
  all.addEventListener('click', () => {
    localStorage.clear('tasklist');
    ul.innerHTML = '';
  });
};
