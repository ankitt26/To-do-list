import './style.css';
import addlist from '../modules/addlist.js';
import removelist from '../modules/removelist.js';
import render from '../modules/render.js';
import clearall from '../modules/clearall.js';
import edit from '../modules/edit.js';
import { checkCompleted, updateCheck } from '../modules/completelist.js';

addlist();
removelist();
render();
clearall();
edit();
checkCompleted();
updateCheck();

const refresh = document.querySelector('.fa-arrows-rotate');
refresh.addEventListener('click', () => {
  window.location.reload();
});
