//
Template.sticky.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

Template.sticky.events(App.Template.registerEditableInput("editingSoundcloudPlaylist", "link"));

