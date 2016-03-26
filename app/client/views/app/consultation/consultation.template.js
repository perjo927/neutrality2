
var fireSelector = ".scrollfire.consultation";

Template.consultation.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};


Template.consultation.onRendered(function () {
    var options = [
        {
            selector: fireSelector,
            offset: 1,
            callback: "Template.consultation.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(options);

    this.$('.modal-trigger').leanModal();
});



Template.consultation_icon_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingConsultationIcon"),
    "click .edit": App.Template.Session.setHelper("editingConsultationIcon", "icon", App.Template.Jquery.focus)
});

Template.consultation_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingConsultationTitle"),
    "click .edit": App.Template.Session.setHelper("editingConsultationTitle", "title", App.Template.Jquery.focus)
});

Template.consultation_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingConsultationText"),
    "click .edit": App.Template.Session.setHelper("editingConsultationText", "text", App.Template.Jquery.focus)
});