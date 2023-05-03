import _ from 'lodash';
import './style.css';

const ele = document.getElementById('h2');
ele.innerHTML = 'hello again brother';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());