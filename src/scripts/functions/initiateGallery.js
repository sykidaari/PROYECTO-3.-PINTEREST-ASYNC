import { createAndAppendChild } from './createAndAppendChild';
import { createMasonry } from './createMasonry';
import { createPost, postElements } from './createPost';
import { setGalleryOption } from './galleryScroll';
import { createPostHoverElements } from './postHover';

export const initiateGallery = async (parentBox, galleryItem, page, value) => {
  setGalleryOption(value);

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?order_by=relevant&per_page=10&page=${page}&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc`
    );

    const posts = await response.json();
    console.log(posts);
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
        });
      }
    }

    const currentScrollY = window.scrollY;

    createMasonry(parentBox, galleryItem);

    window.scrollTo({ top: currentScrollY, behavior: 'auto' });
  } catch (error) {
    console.log(error);
  }
};

export const create_reloadInitialGallery_event = (button, parentBox) => {
  const logoButton = document.querySelector(button);
  logoButton.addEventListener('click', () => {
    document.querySelector(parentBox).innerHTML = '';
    initiateGallery('#gallery', 'article', 0, 1);
  });
};
