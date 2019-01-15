const button = document.querySelector('button');
const list = document.querySelector('ul');
import { addElement } from './factory.js';
import '../styles/main.scss';

button.addEventListener('click', ev=> {
  addElement(list,'LI', 'a task is born');
  const listItem = document.querySelector('li');
  listItem.addEventListener('click', ev=> {
    ev.target.remove(ev.target);
  })
})
