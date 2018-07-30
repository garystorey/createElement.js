import el from './create';
const add = elm => document.body.appendChild(elm);

// if no tag is passed a div is created
add(
  el({
    id: 'div1',
    text: 'Im a div',
    style: {
      margin: '0 0 20px 0'
    }
  })
);

add(
  el('span', {
    text: 'Hello ',
    className: 'gary' // class also works
  })
);

add(
  el('span', {
    text: 'World',
    data: {
      // "data- values
      punctuation: '!'
    }
  })
);

const el1 = el({ id: 'myId' });
const mySpan = el('span', { text: 'hello ' });
const mySpan2 = el('span', { text: 'World' });
el1.appendChild(mySpan);
el1.appendChild(mySpan2);
add(el1);
