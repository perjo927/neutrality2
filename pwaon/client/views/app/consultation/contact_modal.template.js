
Template.contact_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingConsultationModalTitle"),
    "click .edit": App.Template.Session.setHelper("editingConsultationModalTitle", "modal.title", App.Template.Jquery.focus)
});


