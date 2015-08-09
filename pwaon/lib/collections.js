// Runs in both client and server contexts

ContentAreas.forEach(function (area) {
    App.collections[area] = new Mongo.Collection(area);
});


/* LIB */
App.Collection.insert = function (collection, document, callback) {
    collection.insert(document, function (error, id) {
        if (!!error) {
            console.error(error);
        } else {
            //console.info(id);
            if (!!callback) {
                callback(id);
            }
        }
    });
};

//
App.Collection.update = function (collection, id, modifier, callback) {
    collection.update(id, modifier, function (error, id) {
        if (!!error) {
            //console.error("Features update", error);
        } else {
            //console.info("Features update", id);
            if (!!callback) {
                callback();
            }
        }
    });
};

App.Collection.remove = function (collection,_id, callback) {
    collection.remove(_id, function (error) {
        if(!!error) {
            //console.error(error);
        } else {
            //console.info("Removed",docViewer)
            if (!!callback) {
                callback();
            }
        }
    });
};

App.Collection.findOne = function (collection, query) {
    if (!query) {
        return collection.findOne();
    }
    return collection.findOne(query);
};

App.Collection.find = function (collection, query) {
    if (!query) {
        return collection.find();
    }
    return collection.find(query);
};
