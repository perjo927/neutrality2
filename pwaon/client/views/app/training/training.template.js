var fireSelector = ".scrollfire.training";


Template.training.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);
});

Template.training_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTrainingTitle"),
    "click .edit": App.Template.Session.setHelper("editingTrainingTitle", "title", App.Template.Jquery.focus)
});