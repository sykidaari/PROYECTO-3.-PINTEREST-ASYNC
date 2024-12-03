import { createAndAppendChild } from './createAndAppendChild';

export const initiateGallery = async (containerElement) => {
  try {
    const response = await fetch(
      'https://api.unsplash.com/photos?order_by=latest&client_id=V6C9h-2o3BlK2ZmwogMFlRU6N9I6dN0LiatO54mv3Dc'
    );
    const posts = await response.json();
    for (const element of posts) {
      const post = createAndAppendChild('#gallery', 'article');
    }
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
initiateGallery();
