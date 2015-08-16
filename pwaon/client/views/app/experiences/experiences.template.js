var fireSelector = ".scrollfire" + "." + "experiences";


Template.experiences.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.experiences.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.intro.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

Template.experiences_bottom.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

Template.experiences_bottom.helpers({
    "overFlowText": function () {
        return this.text.substring(0,100) + " ... ";
    }
});


/* */
Template.experiences_name_container.events({
    "click .edit": App.Template.Session.setHelperById("editingExperiencesName", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesName")
});