import { createMasonry } from './createMasonry';
import { createPost, postElements } from './createPost';

export const initiateGallery = async (containerElement) => {
  try {
    const response = await fetch(
      'https://api.unsplash.com/photos?order_by=latest&per_page=25&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc'
    );

    const posts = await response.json();
    for (const element of posts) {
      createPost(element);

      const { postedIMG, profilePicture, userName, date } = postElements;
      postedIMG.src = element.urls.regular;

      profilePicture.src = element.user.profile_image.large;
      userName.innerText = element.user.name;
      date.innerText = element.created_at.split('T')[0];
    }

    createMasonry('#gallery', 'article');

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
