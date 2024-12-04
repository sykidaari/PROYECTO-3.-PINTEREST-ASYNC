import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export const createMasonry = (gridBox, gridItem) => {
  const grid = document.querySelector(gridBox);
  imagesLoaded(grid, () => {
    const msnry = new Masonry(grid, {
      itemSelector: gridItem,
      columnWidth: gridItem,
      percentPosition: true
    });
  });
};
