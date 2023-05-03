export default (tasklist) => {
  const ul = document.querySelector('.list-ul');
  const sortIndex = tasklist.sort((a, b) => a.index - b.index);
  ul.innerHTML = '';

  sortIndex.forEach((value) => {
    const li = document.createElement('li');
    li.className = 'list-li';
    li.id = value.index;

    li.innerHTML = `<label for="list" id="${value.index}" class="description"> <input type="checkbox" name="listCheckbox" value="${value.completed}">
${value.description} </label>
  <i class="fa fa-ellipsis-v" id="${value.index}" aria-hidden="true"></i>
`;
    ul.append(li);
  });
};
