Template.team_creator.events({
    'submit form': function (event) {
        event.preventDefault();

        var newTeam = TeamCreator.createNewTeam(event);
        TeamCreator.insertNewTeam(newTeam);
    }
});
