Template.training_creator.events({
    'submit form': function (event) {
        event.preventDefault();
        var newTraining = TrainingCreator.createNewTraining(event);
        TrainingCreator.insertNewTraining(newTraining);
    }
});
