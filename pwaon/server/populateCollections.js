var ac = App.collections;

for (var collection in ac) {
    if (ac.hasOwnProperty(collection)) {
        var viewModel = VM.sections[collection];
        if (!!viewModel) {
            var c = ac[collection];

            if (c.find().count() === 0) {
                viewModel.forEach(function (element, index, array) {
                    c.insert(element);
                });

            }
        }
    }
}

