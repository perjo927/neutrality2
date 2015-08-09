Template.work_creator.events({
    'submit form': function (event) {
        event.preventDefault();
        var newWork = WorkCreator.createNewWork(event);
        WorkCreator.insertNewWork(newWork);
    }
});
