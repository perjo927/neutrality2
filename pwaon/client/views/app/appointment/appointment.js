var thisViewName = "appointment";

Template[thisViewName].onRendered(function () {
    this.$('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.05, // Opacity of modal background
        in_duration: 500, // Transition in duration
        out_duration: 100 // Transition out duration
        //ready: function() { alert('Ready'); }, // Callback for Modal open
        //complete: function() { alert('Closed'); } // Callback for Modal close
    });
    this.$('.tooltipped').tooltip();
});

/* */
Template[thisViewName].helpers({
});

/* */
Template[thisViewName].events({

});
