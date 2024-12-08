import { createAndAppendChild } from './createAndAppendChild';
import { createMasonry } from './createMasonry';
import { createPost, postElements } from './createPost';

export const search = async (e, inputValue, parentBox, galleryItem) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc`
    );

    document.querySelector(parentBox).innerHTML = '';
    const data = await response.json();
    const posts = data.results;

    for (const element of posts) {
      createPost(parentBox);

      const { postedIMG, profilePicture, userName, date } = postElements;
      postedIMG.src = element.urls.regular;

      profilePicture.src = element.user.profile_image.large;
      userName.innerText = element.user.name;
      date.innerText = element.created_at.split('T')[0];
    }
    createMasonry(parentBox, galleryItem);
  } catch (error) {
    console.log(error);
  }
};

export const createSearchEvent = (button, input) => {
  const searchButton = document.querySelector(button);

  const searchInput = document.querySelector(input);

  searchButton.addEventListener('click', (e) => {
    const searchInputValue = searchInput.value;
    search(e, searchInputValue, '#gallery', 'article');
    searchInput.value = '';
  });
};
