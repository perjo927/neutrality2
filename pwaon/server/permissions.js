
var userAccess = function () {
    var insert = function (user, doc) {
            return !!user;
        };
    var update = function(user, doc, fields, modifier) {
            return !!user;
        };
    var remove = function(user, doc) {
            return !!user;
        };

    return {
        insert: insert,
        update: update,
        remove: remove
    };
};

ContentAreas.forEach(function (key) {
    App.collections[key].allow(userAccess());
});

