Template.events_creator.events({
    'submit form': function (event) {
        event.preventDefault();
        var newEvent = EventsCreator.createNewEvent(event);
        EventsCreator.insertNewEvent(newEvent);
    }
});
