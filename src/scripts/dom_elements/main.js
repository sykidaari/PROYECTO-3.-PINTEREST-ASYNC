import { createAndAppendChild } from '../functions/createAndAppendChild';

const searchInput = 'dog';

const displayGalleryItems = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchInput}&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc`
    );
    const items = await response.json();
    console.log(items);
  } catch (error) {
    console.log(error);
  }
};

export const createMain = (appSelector) => {
  const main = createAndAppendChild(appSelector, 'main');

  const gallery = createAndAppendChild(main, 'section');
  gallery.id = 'gallery';
};
