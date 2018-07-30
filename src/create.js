const el = (tag, props) => {
  if (typeof tag === 'string') {
    // TODO fn to check for valid tag
    tag = tag || 'div';
  } else {
    if (!props) {
      props = tag;
    }
    tag = 'div';
  }

  const text = props.text || null;
  const data = props.data || [];
  const style = props.style || [];
  const classes = props.className || props.class || [];

  props.class = classes;
  props.tag = null;
  props.text = null;
  props.data = null;
  props.style = null;
  props.className = null;

  let node = document.createElement(tag);

  if (text) {
    const txt = document.createTextNode(text);
    node.appendChild(txt);
  }

  for (let prop in props) {
    if (props[prop]) {
      node.setAttribute(prop, props[prop]);
    }
  }
  if (style) {
    for (let prop in style) {
      node.style[prop] = style[prop];
    }
  }
  if (data) {
    for (let prop in data) {
      node.dataset[prop] = data[prop];
    }
  }
  return node;
};

export default el;
