import { galleryPostElements } from '../../assets/assets';
import { createAndAppendChild } from './createAndAppendChild';

export const postElements = {};

export const createPost = (API_arrayElement) => {
  const post = createAndAppendChild('#gallery', 'article');

  for (const key in galleryPostElements) {
    const postElement = createAndAppendChild(
      post,
      galleryPostElements[key].element
    );
    postElement.className = galleryPostElements[key].class;

    if (key === 'downloadButton') {
      const buttonIMG = createAndAppendChild(
        postElement,
        galleryPostElements[key].innerElement.element
      );
      buttonIMG.src = galleryPostElements[key].innerElement.src;
    }

    postElements[key] = postElement;
  }
};
