import fetchLocal from './fetchLocal.js';

export default () => {
  const tasklist = fetchLocal();
  const ul = document.querySelector('.list-ul');
  const sortIndex = tasklist.sort((a, b) => a.index - b.index);
  ul.innerHTML = '';

  sortIndex.forEach((value) => {
    const li = document.createElement('li');
    li.className = 'list-li';
    li.id = value.index;

    li.innerHTML = `<input type="checkbox" id="check${value.index}" class="checkbok" name="listCheckbox" value="${value.completed}">
  <p class="description" id="desc${value.index}"> ${value.description} </p>
  <i class="fa fa-solid fa-trash" id="fa${value.index}" aria-hidden="true"></i>
`;
    ul.append(li);
  });
};
