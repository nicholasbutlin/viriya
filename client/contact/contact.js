Template.contact.events({
  'submit form': function(e) {
    e.preventDefault();

    var contactDeets = {
      name: $(e.target).find('[name=name]').val(),
      email: $(e.target).find('[name=email]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    var errors = validateContact(contactDeets);
    if (errors.name || errors.email || errors.message){
      return Session.set('contactErrors', errors);
    }

    Meteor.call('sendContactEmail', contactDeets)
    sweetAlert('Thanks for contacting us, we will be in touch soon');
    Router.go('home')
  }
});

Template.contact.created = function() {
  Session.set('contactErrors', {});
}
Template.contact.helpers({
  errorMessage: function(field) {
    return Session.get('contactErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('contactErrors')[field] ? 'has-error' : '';
  }
});
