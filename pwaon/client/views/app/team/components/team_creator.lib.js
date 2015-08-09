TeamCreator = {};

TeamCreator.createNewTeam = function (event) {
    var newTeam = App.UI.parseForm(event);
    return newTeam;
};

TeamCreator.insertNewTeam = function (newTeam) {
    var collection = App.collections["team"];
    App.Collection.insert(collection, newTeam, function (id) {
        console.debug(id);
    });
};