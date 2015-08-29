var fireSelector = ".scrollfire.training";


Template.training.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
    Materialize.fadeInImage(fireSelector);
};

Template.training.onRendered(function () {
    this.$(".parallax" + fireSelector).parallax().css("opacity", "0");
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.training.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

Template.training_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTrainingTitle"),
    "click .edit": App.Template.Session.setHelper("editingTrainingTitle", "title", App.Template.Jquery.focus)
});

/**/
Template.training_card_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTrainingCardTitle"),
    "click .edit": App.Template.Session.setHelperById("editingTrainingCardTitle", App.Template.Jquery.focus)
});

/**/
Template.training_card_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTrainingCardText"),
    "click .edit": App.Template.Session.setHelperById("editingTrainingCardText", App.Template.Jquery.focus)
});