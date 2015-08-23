//

ContentAreas.forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});

Object.keys(Models).forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});
