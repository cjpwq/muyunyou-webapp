import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';

const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const content = new Content(document.getElementById('destination-content'));

const itemEls = tabEl.querySelectorAll('.tab-item');

// tab.to(0)

// for (const itemEl of itemEls) {
//   itemEl.addEventListener(
//     'click',
//     () => {
//       const index = itemEl.dataset.id - 1;
//       tab.to(index);
//     },
//     false
//   );
// }

// 事件代理（原理：利用事件冒泡机制）
tabEl.addEventListener(
  'click',
  ev => {
    // console.log(1);
    // console.log(ev.target);
    const itemEl = ev.target;

    if (itemEl.classList.contains('tab-item')) {
      const index = itemEl.dataset.id - 1;
      const tabPromise = tab.to(index);

      content.setLoading();

      tabPromise.then(data => {
        content.set(data);
      });
    }
  },
  false
);

itemEls[0].click();

// tab.to(1).then(data => {
//   content.set(data);
// });

// tab.setActiveItem(6);
// tab.to(0);
