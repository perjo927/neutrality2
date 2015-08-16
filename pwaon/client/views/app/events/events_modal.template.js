Template.events_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsTitle"),
    "click .edit": App.Template.Session.setHelperById("editingEventsTitle", App.Template.Jquery.focus)
});

Template.events_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsText"),
    "click .edit": App.Template.Session.setHelperById("editingEventsText", App.Template.Jquery.focus)
});
