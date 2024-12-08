import { createAndAppendChild } from '../functions/createAndAppendChild';

export const createMain = (appSelector) => {
  const main = createAndAppendChild(appSelector, 'main');

  const gallery = createAndAppendChild(main, 'section');
  gallery.id = 'gallery';
};
