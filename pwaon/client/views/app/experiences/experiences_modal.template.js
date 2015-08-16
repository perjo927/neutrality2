Template.experiences_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesTitle"),
    "click .edit": App.Template.Session.setHelperById("editingExperiencesTitle", App.Template.Jquery.focus)
});

Template.experiences_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesText"),
    "click .edit": App.Template.Session.setHelperById("editingExperiencesText", App.Template.Jquery.focus)
});
