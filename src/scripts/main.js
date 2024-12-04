import '../styles/main.scss';
import { createHeader } from '../scripts/dom_elements/header';
import { createMain } from './dom_elements/main';
import { initiateGallery } from './functions/initiateGallery';
import { createMasonry } from './functions/createMasonry';

createHeader('#app');
createMain('#app');
initiateGallery();

// initiateGallery('#gallery');

// TODO
//? 1 CREATE DOM ELEMENTS
