validateContact = function (contact) {
  var errors = {};
  if (!contact.name)
    errors.name =  "Please fill in your name";
  if (!contact.email)
    errors.email = "Please fill in your email";
  if (!contact.message)
    errors.message = "Please fill in your message";
  return errors;
};

Meteor.methods({
  sendContactEmail: function(contactDeets){
    check([contactDeets.name, contactDeets.message, contactDeets.email], [String]);
    this.unblock();
    Email.send({
      from: contactDeets.email,
      to: 'nickbutlin@viriyaenergy.com',
      cc: contactDeets.email,
      subject: "Enquiry from " + contactDeets.name,
      text: contactDeets.message
    });
  }

});
