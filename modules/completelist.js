export default (tasklist) => {
  tasklist.forEach((value) => {
    if (value.completed === true) {
      const cId = `check${value.index}`;
      const comp = document.getElementById(cId);
      comp.checked = true;
    }
  });
};
