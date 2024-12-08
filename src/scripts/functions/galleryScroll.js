import { initiateGallery } from './initiateGallery';

export let page = 1;
export const galleryScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    page++;

    initiateGallery('article');

    return page;
  }
};

window.addEventListener('scroll', () => {
  galleryScroll(page);
});
