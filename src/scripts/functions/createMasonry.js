import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export let msnry;
export const createMasonry = (gridBox, gridItem) => {
  const scrollTop = window.scrollY;
  if (msnry) {
    msnry.destroy();
  }

  const grid = gridBox;

  imagesLoaded(grid, () => {
    msnry = new Masonry(grid, {
      itemSelector: gridItem,
      columnWidth: gridItem,
      percentPosition: true,
      gutter: 26,
      isFitWidth: true
    });
    msnry.layout();

    window.scrollTo({ top: scrollTop, behavior: 'auto' });

    window.addEventListener('resize', () => {
      msnry.layout();
    });
  });
};
