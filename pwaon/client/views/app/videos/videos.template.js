var fireSelector = ".scrollfire.videos";


Template.videos.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);
    //this.$('.modal-trigger').leanModal();
});

/**/
Template.videos_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingVideosTitle"),
    "click .edit": App.Template.Session.setHelper("editingVideosTitle", "title", App.Template.Jquery.focus)
});

/**/
Template.videos_img_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingVideosImg"),
    "click .edit": App.Template.Session.setHelper("editingVideosImg", "img", App.Template.Jquery.focus)
});