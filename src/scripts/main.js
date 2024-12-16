import '../styles/main.scss';
import { createHeader } from '../scripts/dom_elements/header';
import { createMain } from './dom_elements/main';
import {
  create_reloadInitialGallery_event,
  initiateGallery
} from './functions/initiateGallery';
import { createSearchEvent } from './functions/search';
import {
  createScrollEvent,
  setInitialScrollPage
} from './functions/galleryScroll';

setInitialScrollPage(1);
createHeader('#app');
createMain('#app');
initiateGallery('#gallery', 'article', 0, 1);
createSearchEvent('#searchBar', '#searchBar input');
createScrollEvent();
create_reloadInitialGallery_event('#logo', '#gallery');
