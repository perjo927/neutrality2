EventsCreator = {};

EventsCreator.createNewEvent = function (event) {
    var newEvent = App.UI.parseForm(event);
    return newEvent;
};

EventsCreator.insertNewEvent = function (newEvents) {
    var collection = App.collections["eventss"];
    App.Collection.insert(collection, newEvents, function (id) {
        //console.debug(id);
    });
};