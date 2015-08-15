Template.intro_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroModalTitle"),
    "click .edit": App.Template.Session.setHelperById("editingIntroModalTitle", App.Template.Jquery.focus)
});

Template.intro_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroModalText"),
    "click .edit": App.Template.Session.setHelperById("editingIntroModalText", App.Template.Jquery.focus)
});
