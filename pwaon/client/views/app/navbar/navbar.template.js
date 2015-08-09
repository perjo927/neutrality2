Template.navbar.onRendered( function() {
    this.$('.button-collapse').sideNav();
    this.$(".dropdown-button").dropdown();
});

/* */
Template.navbar.events({
    "click #sign-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("Du &auml;r nu utloggad.", 5000, 'black');
    }
});

/**/
Template.nav_items.events({
    "click .edit": App.Template.Session.setDesignatedCollectionPropertyFromClickName("editingNavbar", "text", App.Template.Jquery.focus)
});

/**/
Template.nav_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingNavbar")
});

Template.nav_container.helpers({
    "affectedProperty": App.Template.Session.getHelper("editingNavbar")
});

