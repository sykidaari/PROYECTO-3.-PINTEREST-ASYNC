import { initiateGallery } from './initiateGallery';
import { search, searchInputValue } from './search';

export let page = 1;

export const setInitialScrollPage = (initialPage) => {
  page = initialPage;
};

export let galleryOption = null;
export const setGalleryOption = (value) => {
  galleryOption = value;
};

export const state = {
  searchInputValue: null
};

let isFetching = false;

export const galleryScroll = async () => {
  if (isFetching) return;

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    isFetching = true;

    if (galleryOption === 1) {
      page++;

      if (page > 1) {
        initiateGallery('#gallery', 'article', page, 1);
      }
    } else if (galleryOption === 2) {
      await search(state.searchInputValue, '#gallery', 'article', page, 2);

      page++;
    }
  }

  isFetching = false;

  return page;
};

export const createScrollEvent = () => {
  window.addEventListener('scroll', () => {
    galleryScroll(page);
  });
};
