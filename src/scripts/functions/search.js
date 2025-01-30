import { createAndAppendChild } from './createAndAppendChild';
import { createMasonry } from './createMasonry';
import { createPost, postElements } from './createPost';
import { page, setGalleryOption, state } from './galleryScroll';
import { noResults } from './noResults';
import { createPostHoverElements } from './postHover';

export const search = async (
  inputValue,
  parentBox,
  galleryItem,
  page,
  value
) => {
  setGalleryOption(value);
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${inputValue}&page=${page}&per_page=10&order_by=relevant&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc`
    );

    if (page === 1) {
      document.querySelector(parentBox).innerHTML = '';
    }

    const data = await response.json();

    const posts = data.results;

    if (posts.length === 0) {
      search('gatos', '#gallery', 'article', 1, 2);
      noResults();
      console.log('Noresults run');
    }

    for (const element of posts) {
      const article = createPost('#gallery');

      const { postedIMG, profilePicture, userName, date } = postElements;
      postedIMG.src = element.urls.regular;

      profilePicture.src = element.user.profile_image.large;
      userName.innerText = element.user.name;
      date.innerText = element.created_at.split('T')[0];

      const buttons = createPostHoverElements(article);

      if (buttons.likeButton) {
        const likesSpan = createAndAppendChild(buttons.likeButton, 'span');
        likesSpan.innerText = element.likes;

        buttons.likeButton.addEventListener('click', () => {
          let currentLikes = element.likes;

          currentLikes++;
          likesSpan.innerText = currentLikes;

          const likeButtons = document.querySelectorAll('.likeButton');

          likeButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
              const clickedButton = event.currentTarget;
              clickedButton.style.filter = 'saturate(700%)';
              clickedButton.style.backgroundColor = 'white';
            });
          });
        });
      }
    }

    createMasonry(parentBox, galleryItem);
  } catch (error) {
    console.log(error);
  }
};
export let searchInputValue;

export const createSearchEvent = (form, input) => {
  const searchForm = document.querySelector(form);
  const searchInput = document.querySelector(input);

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = searchInput.value;

    if (inputValue) {
      state.searchInputValue = inputValue;

      search(inputValue, '#gallery', 'article', 1, 2);
      searchInput.value = '';
    }
    if (document.querySelector('#noresults')) {
      console.log('Hi');
      document.querySelector('#noresults').remove();
    }
  });
};
