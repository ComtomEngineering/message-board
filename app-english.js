Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to app-english.";
  };

  Template.hello.messages = function () {
    return Messages.find({}, {sort: {date: -1}});
  }

  Template.hello.events({
    'click #send' : function () {
      date = new Date();
      Messages.insert({text: $('#text').val(), date: date.getTime() });
      $('#text').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
