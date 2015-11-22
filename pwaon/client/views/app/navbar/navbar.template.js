Template.navbar.onRendered( function() {
    this.$('.button-collapse').sideNav();
    this.$(".dropdown-button").dropdown();
    this.$('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.05, // Opacity of modal background
        in_duration: 500, // Transition in duration
        out_duration: 100 // Transition out duration
    });
});

/* */
Template.navbar.events({
    "click #sign-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("You are now signed out.", 5000, 'black');
    }
});

/* TODO: Refactor */
Template.nav_items.events({
    "click .edit": App.Template.Session.setDesignatedCollectionPropertyFromClickName(
        "editingNavbar", "text", App.Template.Jquery.focus)
});

/**/
Template.nav_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingNavbar")
});

Template.nav_container.helpers({
    "affectedProperty": App.Template.Session.getHelper("editingNavbar")
});

