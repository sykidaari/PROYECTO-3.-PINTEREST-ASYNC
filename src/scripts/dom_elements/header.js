import { headerElements } from '../../assets/assets';
import { createAndAppendChild } from '../functions/createAndAppendChild';

export const createHeader = (appSelector) => {
  const header = createAndAppendChild(appSelector, 'header');

  const logo = createAndAppendChild(header, 'a');
  logo.id = headerElements.logo.id;

  const logoIMG = createAndAppendChild(logo, 'img');
  logoIMG.src = headerElements.logo.content.src;
  logoIMG.alt = headerElements.logo.content.alt;

  const navbar = createAndAppendChild(header, 'nav');
  navbar.id = headerElements.navbar.id;

  const firstUl = createAndAppendChild(navbar, 'ul');
  for (const key in headerElements.navbar.firstUl) {
    const li = createAndAppendChild(firstUl, 'li');
    li.className = 'navOption';
    const a = createAndAppendChild(li, 'a');
    a.innerText = headerElements.navbar.firstUl[key].content;
  }

  const searchBar = createAndAppendChild(navbar, 'form');
  searchBar.id = headerElements.navbar.searchBar.id;

  const [searchButtonContent, SearchInputContent] =
    headerElements.navbar.searchBar.content;
  const searchButton = createAndAppendChild(searchBar, 'button');
  searchButton.innerText = searchButtonContent;

  const searchInput = createAndAppendChild(searchBar, 'input');
  searchInput.type = 'search';
  searchInput.placeholder = SearchInputContent;

  const secondUl = createAndAppendChild(navbar, 'ul');
  for (const key in headerElements.navbar.secondUl) {
    const li = createAndAppendChild(secondUl, 'li');
    const button = createAndAppendChild(li, 'button');
    if (key === 'notificationBell' || key === 'commentButton') {
      const buttonIMG = createAndAppendChild(button, 'img');
      buttonIMG.src = headerElements.navbar.secondUl[key].content.src;
      buttonIMG.alt = headerElements.navbar.secondUl[key].content.alt;
    } else {
      button.innerText = headerElements.navbar.secondUl[key].content;
    }
  }
};
