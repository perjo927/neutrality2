const insertCollection = (collection, element) => {
    if (collection.find().count() === 0) {
        collection.insert(element);
    }
};

const insertCollections = function (collections, container) {
    for (var collection in collections) {
        if (collections.hasOwnProperty(collection)) {
            var viewModel = container[collection];
            if (!!viewModel) {
                var c = collections[collection];
                //console.log(collection);
                if (c.find().count() === 0) {
                    viewModel.forEach(function (element, index, array) {
                        c.insert(element);
                    });

                }
            }
        }
    }
};

var ac = App.collections;

//console.log(VM.sections);
insertCollection(ac["contentareas"], VM.contentareas);
insertCollections(ac, VM.sections);
insertCollections(ac, Models);

