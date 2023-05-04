import './style.css';
import addlist from '../modules/addlist.js';
import removelist from '../modules/removelist.js';
import render from '../modules/render.js';
import clearall from '../modules/clearall.js';
import edit from '../modules/edit.js';
import completelist from '../modules/completelist.js';

let tasklist;
if (localStorage.getItem('tasklist')) {
  tasklist = JSON.parse(localStorage.getItem('tasklist'));
} else {
  tasklist = [];
}

addlist(tasklist);
removelist(tasklist);
render(tasklist);
clearall(tasklist);
edit(tasklist);
completelist(tasklist);