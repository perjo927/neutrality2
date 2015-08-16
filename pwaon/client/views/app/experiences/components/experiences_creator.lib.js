ExperiencesCreator = {};

ExperiencesCreator.createNewExperience = function (event) {
    var newExperience = App.UI.parseForm(event);
    return newExperience;
};

ExperiencesCreator.insertNewExperience = function (newExperiences) {
    var collection = App.collections["experiences"];
    App.Collection.insert(collection, newExperiences, function (id) {
        //console.debug(id);
    });
};