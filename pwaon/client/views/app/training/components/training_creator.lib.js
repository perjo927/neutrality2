TrainingCreator = {};

TrainingCreator.createNewTraining = function (event) {
    var newTraining = App.UI.parseForm(event);
    return newTraining;
};

TrainingCreator.insertNewTraining = function (newTraining) {
    var collection = App.collections["training"];
    App.Collection.insert(collection, newTraining, function (id) {
    });
};