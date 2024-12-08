import '../styles/main.scss';
import { createHeader } from '../scripts/dom_elements/header';
import { createMain } from './dom_elements/main';
import { initiateGallery } from './functions/initiateGallery';
import { search } from './functions/search';

createHeader('#app');
createMain('#app');
initiateGallery('#gallery', 'article');

const searchButton = document.querySelector('#searchBar button');

const searchInput = document.querySelector('#searchBar input');

searchButton.addEventListener('click', (e) => {
  const searchInputValue = searchInput.value;
  search(e, searchInputValue, '#gallery', 'article');
});

// TODO
//? CREATE SEARCH FUNCTION AND RESULTS
//? CREATE INFINITE POST LOAD/BUTTON TO LOAD MORE POSTS
//? CREATE HOVER ELEMENTS ON POST
//? CREATE OPTION TO SWITCH TO ZEN MODE

//? FIX STYLES - post elements positions/font-size in media queries - all else done for now
