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

// TODO
//* CREATE SEARCH FUNCTION AND RESULTS - DONE
//* CREATE INFINITE POST LOAD/BUTTON TO LOAD MORE POSTS DONE
// * ALL SEARCH LOGIC IS DONE

//* CREATE HOVER ELEMENTS ON POST - done, like function done
//? CREATE OPTION TO SWITCH TO ZEN MODE

//* FIX STYLES - post elements positions/font-size in media queries - all else done for now - DONE
