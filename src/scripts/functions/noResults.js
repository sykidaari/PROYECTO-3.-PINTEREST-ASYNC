import { createAndAppendChild } from './createAndAppendChild';

export const noResults = () => {
  if (!document.querySelector('#noresults')) {
    const div = createAndAppendChild('main', 'div');
    div.id = 'noresults';
    const p = createAndAppendChild(div, 'p');
    p.innerText =
      'We couldn’t find any results for your search. Try checking the spelling or using different keywords.';
  }
};
