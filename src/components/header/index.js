import './header.css';

const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');

const CHANGED_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';
let state = INIT_STATE;

scrollContainer.addEventListener(
  'scroll',
  () => {
    // console.log(scrollContainer.scrollTop);
    if (state !== CHANGED_STATE && scrollContainer.scrollTop > 0) {
      state = CHANGED_STATE;
      console.log('changed');
      headerEl.classList.add(CHANGED_CLASS_NAME);
    } else if (state !== INIT_STATE && scrollContainer.scrollTop <= 0) {
      state = INIT_STATE;
      console.log('reset');
      headerEl.classList.remove(CHANGED_CLASS_NAME);
    }
  },
  false
);
