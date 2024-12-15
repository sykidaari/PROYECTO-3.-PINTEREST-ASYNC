const headerElements = {
  logo: {
    id: 'logo',
    content: { src: 'src/assets/IMGs/pinterest_logo.png', alt: 'Company-logo' }
  },

  navbar: {
    id: 'navBar',
    firstUl: {
      startPageButton: { content: 'Inicio' },
      exploreButton: { content: 'Explorar' },
      createButton: { content: 'Crear' }
    },

    searchBar: { id: 'searchBar', content: ['🔎', 'Buscar'] },

    secondUl: {
      notificationBell: {
        content: {
          src: 'src/assets/IMGs/notification_bell.png',
          alt: 'Notification-Bell'
        }
      },
      commentButton: {
        content: { src: 'src/assets/IMGs/comment_dots.png', alt: 'Comments' }
      },
      profileButton: { content: 'D' }
    }
  }
};

const galleryPostElements = {
  postedIMG: { element: 'img', class: 'postedIMG' },
  profilePicture: { element: 'img', class: 'profilePicture' },
  userName: { element: 'h5', class: 'userName' },

  downloadButton: {
    element: 'button',
    class: 'downloadButton',
    innerElement: { element: 'img', src: '/src/assets/IMGs/upload_share.png' }
  },
  date: { element: 'h6', class: 'date' }
};

const postHoverElements = {
  cameraButton: {
    src: '/src/assets/IMGs/icon_camera.png',
    alt: 'camera-button'
  },
  likeButton: {
    src: '/src/assets/IMGs/like_heart.png',
    alt: 'like-button'
  },
  visitButton: { text: 'Visitar' }
};

export { headerElements, galleryPostElements, postHoverElements };
