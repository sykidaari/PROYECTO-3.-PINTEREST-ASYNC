import { postHoverElements } from '../../assets/assets';
import { createAndAppendChild } from './createAndAppendChild';

const buttons = {};

export const createPostHoverElements = (post) => {
  const hoverDiv = createAndAppendChild(post, 'div');
  hoverDiv.className = 'hoverDiv';

  for (const key in postHoverElements) {
    const hoverButton = createAndAppendChild(hoverDiv, 'button');
    hoverButton.className = key;

    const element = postHoverElements[key];

    hoverButton.innerText = element.text || '';
    if (element.src) {
      const hoverButtonIMG = createAndAppendChild(hoverButton, 'img');
      hoverButtonIMG.src = element.src;
    }
    buttons[key] = hoverButton;
  }
  return buttons;
};
