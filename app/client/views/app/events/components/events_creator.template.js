'use strict';


/* */
Template.events_creator.onRendered(() => {
    let pickerFrom = EventsCreator.createPicker('datepicker_from');
    let pickerTo = EventsCreator.createPicker('datepicker_to');
});

Template.events_creator.events({
    'submit form': function (event) {
        event.preventDefault();
        var newEvent = EventsCreator.createNewEvent(event);
        EventsCreator.insertNewEvent(newEvent);
    }
});
