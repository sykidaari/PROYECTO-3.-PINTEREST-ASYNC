const headerElements = {
  logo: {
    content: { src: 'src/assets/IMGs/pinterest_logo.png', alt: 'Company-logo' },
    id: '#logo'
  },

  navbar: {
    firstUl: {
      startPageButton: { content: 'Inicio' },
      exploreButton: { content: 'Explorar' },
      createButton: { content: 'Crear' }
    },

    searchBar: { content: ['🔎', 'Buscar'] },

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

export { headerElements };
