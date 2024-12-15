import { galleryPostElements } from '../../assets/assets';
import { createAndAppendChild } from './createAndAppendChild';
import { createPostHoverElements } from './postHover';

export const postElements = {};

export const createPost = (parentBox) => {
  const post = createAndAppendChild(parentBox, 'article');

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
  return post;
};
