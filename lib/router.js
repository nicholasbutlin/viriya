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
  path: '/'
});
Router.route('about', {
  path: '/about'
});
Router.route('projects', {
  path: '/projects'
});
Router.route('contact', {
  path: '/contact'
});
