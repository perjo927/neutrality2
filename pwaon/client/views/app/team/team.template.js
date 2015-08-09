var fireSelector = ".scrollfire" + "." + "persons";


Template.team.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.team.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.team.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

    this.$('.modal-trigger').leanModal();
});

/* */
Template.team.events({
    "click .remove-team": function () {
        if (Meteor.userId()) {
            Materialize.toast(
                '<span>Ta bort medlem? &nbsp;</span>' +
                '<span class="btn-flat yellow-text" class="delete-team" ' +
                'onclick= App.collections.team.remove(\'' +
                this._id +
                '\')>' +
                ' TA BORT ' +
                '</span>', 5000
            );
        }
    }
});

// TODO: refactor somehow

/**/
Template.team_top.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTeamTitle"),
    "click .edit": App.Template.Session.setHelper("editingTeamTitle", "teamTitle", App.Template.Jquery.focus)
});

/* */
Template.team_img_container.events({
    "click .edit": App.Template.Session.setHelperById("editingTeamImg", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTeamImg")
});

/* */
Template.team_name_container.events({
    "click .edit": App.Template.Session.setHelperById("editingTeamName", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTeamName")
});

/* */
Template.team_jobtitle_container.events({
    "click .edit": App.Template.Session.setHelperById("editingTeamPosition", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingTeamPosition")
});

