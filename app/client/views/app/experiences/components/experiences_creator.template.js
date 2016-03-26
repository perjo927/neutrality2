Template.experiences_creator.events({
    'submit form': function (event) {
        event.preventDefault();
        var newExperience = ExperiencesCreator.createNewExperience(event);
        ExperiencesCreator.insertNewExperience(newExperience);
    }
});
