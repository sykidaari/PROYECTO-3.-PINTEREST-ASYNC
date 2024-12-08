import '../styles/main.scss';
import { createHeader } from '../scripts/dom_elements/header';
import { createMain } from './dom_elements/main';
import { initiateGallery } from './functions/initiateGallery';
import { createSearchEvent } from './functions/search';
import { galleryScroll } from './functions/galleryScroll';
galleryScroll();

createHeader('#app');
createMain('#app');
initiateGallery('#gallery', 'article');
createSearchEvent('#searchBar button', '#searchBar input');

// TODO
//* CREATE SEARCH FUNCTION AND RESULTS - DONE
//? CREATE INFINITE POST LOAD/BUTTON TO LOAD MORE POSTS
//? CREATE HOVER ELEMENTS ON POST
//? CREATE OPTION TO SWITCH TO ZEN MODE

//? FIX STYLES - post elements positions/font-size in media queries - all else done for now
