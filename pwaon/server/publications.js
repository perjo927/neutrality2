//

ContentAreas.forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});

Meteor.publish("contentareas", () => {
    return App.collections["contentareas"].find();
});

Object.keys(Models).forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});
