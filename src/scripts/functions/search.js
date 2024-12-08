import { createMasonry, msnry } from './createMasonry';
import { createPost, postElements } from './createPost';

export const search = async (e, inputValue, containerElement, galleryItem) => {
  document.querySelector(containerElement).innerHTML = '';

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc`
    );
    const data = await response.json();
    const posts = data.results;

    for (const element of posts) {
      createPost('#gallery');

      const { postedIMG, profilePicture, userName, date } = postElements;
      postedIMG.src = element.urls.regular;

      profilePicture.src = element.user.profile_image.large;
      userName.innerText = element.user.name;
      date.innerText = element.created_at.split('T')[0];
    }
    createMasonry(containerElement, galleryItem);
  } catch (error) {
    console.log(error);
  }
};
