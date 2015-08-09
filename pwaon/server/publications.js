//

ContentAreas.forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});
