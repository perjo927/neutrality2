
Template.appointment.onRendered(function () {
    this.$('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.05, // Opacity of modal background
        in_duration: 500, // Transition in duration
        out_duration: 100 // Transition out duration
        //ready: function() { alert('Ready'); }, // Callback for Modal open
        //complete: function() { alert('Closed'); } // Callback for Modal close
    });
    //this.$('.tooltipped').tooltip();
});

// TODO: BREAK OUT?
/* */
Template.appointment_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingAppointmentModalTitle"),
    "click .edit": App.Template.Session.setHelper("editingAppointmentModalTitle", "title", App.Template.Jquery.focus)
});

/* */
Template.appointment_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingAppointmentModalText"),
    "click .edit": App.Template.Session.setHelper("editingAppointmentModalText", "text", App.Template.Jquery.focus)
});