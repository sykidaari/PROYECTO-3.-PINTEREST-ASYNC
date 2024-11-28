export const createAndAppendChild = (parent, newTag) => {
  let parentTag;
  if (parent instanceof Element) {
    parentTag = parent;
  } else {
    parentTag = document.querySelector(parent);
  }
  const newElement = parentTag.appendChild(document.createElement(newTag));
  return newElement;
};
