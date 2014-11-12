Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  onBeforeAction: function(){
      $('html, body').animate({scrollTop: 0 }, 350); //pretty fade between routes
      $('#main').hide().fadeIn(250);
      this.next();
    }
});

Router.route('home', {
  name: 'home',
  path: '/',
  onAfterAction: function() {
    // The SEO object is only available on the client.
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: 'Flexibility for a Greener Grid',
      meta: {
        'description': 'Electrical Energy Storage, Electricity Demand Response and Smart grids'
      },
      og: {
        'title': 'Flexibility for a Greener Grid',
        'description': 'Electrical Energy Storage, Electricity Demand Response and Smart grids'
      }
    });
  }
});
Router.route('about', {
  path: '/about',
  onAfterAction: function() {
    // The SEO object is only available on the client.
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: 'About Viriya Energy',
      meta: {
        'description': 'What we do is Electrical Energy Storage, Electricity Demand Response and consulting for Smart grids, micro grids and other areas of electricity transmission, distribution and markets'
      },
      og: {
        'title': 'About Viriya Energy',
        'description': 'What we do is Electrical Energy Storage, Electricity Demand Response and consulting for Smart grids, micro grids and other areas of electricity transmission, distribution and markets'
      }
    });
  }
});
Router.route('projects', {
  path: '/projects'
});
Router.route('contact', {
  path: '/contact'
});
