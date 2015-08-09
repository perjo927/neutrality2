WorkCreator = {};

WorkCreator.createNewWork = function (event) {
    var newWork = App.UI.parseForm(event);
    return newWork;
};

WorkCreator.insertNewWork = function (newWork) {
    var collection = App.collections["work"];
    App.Collection.insert(collection, newWork, function (id) {
        //console.debug(id);
    });
};