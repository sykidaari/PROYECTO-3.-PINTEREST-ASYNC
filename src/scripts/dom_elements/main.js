import { createAndAppendChild } from '../functions/createAndAppendChild';

export const createMain = (appSelector) => {
  const main = createAndAppendChild(appSelector, 'main');

  const gallery = createAndAppendChild(main, 'section');
  gallery.id = 'gallery';

  const backToTopButton = createAndAppendChild(main, 'button');
  backToTopButton.id = 'backToTop';
  backToTopButton.innerText = '⬆';

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
