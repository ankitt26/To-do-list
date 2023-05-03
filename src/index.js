import './style.css';
import addlist from './modules/addlist.js';
import render from './modules/render.js';
import removelist from './modules/removelist.js';
import clearall from './modules/clearall.js';

let tasklist;
if (localStorage.getItem('tasklist')) {
  tasklist = JSON.parse(localStorage.getItem('tasklist'));
} else {
  tasklist = [];
}

render(tasklist);
addlist(tasklist);
removelist(tasklist);
clearall();