Template.events_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsTitle"),
    "click .edit": App.Template.Session.setHelperById("editingEventsTitle", App.Template.Jquery.focus)
});

Template.events_modal_date_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsDate"),
    "click .edit": App.Template.Session.setHelperById("editingEventsDate", App.Template.Jquery.focus)
});

Template.events_modal_location_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLocation"),
    "click .edit": App.Template.Session.setHelperById("editingEventsLocation", App.Template.Jquery.focus)
});


Template.events_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsText"),
    "click .edit": App.Template.Session.setHelperById("editingEventsText", App.Template.Jquery.focus)
});


Template.events_modal_link_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLink"),
    "click .edit": App.Template.Session.setHelperById("editingEventsLink", App.Template.Jquery.focus)
});
