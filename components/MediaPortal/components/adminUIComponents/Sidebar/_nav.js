export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Broadcasts',
      url: '/dashboard',
      icon: 'icon-feed',
      badge: {
        variant: 'danger',
        text: '4 NEW'
      }
    },
    {
      name: 'Messages',
      url: '/dashboard',
      icon: 'icon-envelope',
      badge: {
        variant: 'success',
        text: '5 NEW'
      }
    },
    {
      title: true,
      name: 'Outlets',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'TV Stations',
      url: '/theme/colors',
      icon: 'icon-screen-desktop',
    },
    {
      name: 'Newspaper',
      url: '/theme/typography',
      icon: 'icon-book-open',
    },
    {
      name: 'Radio Stations',
      url: '/theme/colors',
      icon: 'icon-globe',
    },
    {
      name: 'Blogs',
      url: '/theme/typography',
      icon: 'icon-pencil',
    }
  ]
};
