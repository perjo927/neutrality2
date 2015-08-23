var insertCollections = function (collections, container) {
    for (var collection in collections) {
        if (collections.hasOwnProperty(collection)) {
            var viewModel = container[collection];
            if (!!viewModel) {
                var c = collections[collection];

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

insertCollections(ac, VM.sections);
insertCollections(ac, Models);

