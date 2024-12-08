import { galleryPostElements } from '../../assets/assets';
import { postElements } from './createPost';

export const instertPostContent = (element) => {
  const { postedIMG, profilePicture, userName, date } = postElements;
  postedIMG.src = element.urls.regular;

  profilePicture.src = element.user.profile_image.large;
  userName.innerText = element.user.name;
  date.innerText = element.created_at.split('T')[0];
};
