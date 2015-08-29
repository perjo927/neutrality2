var fireSelector = ".scrollfire.resources";


Template.resources.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
    Materialize.fadeInImage(fireSelector);
};

Template.resources.onRendered(function () {
    this.$(".parallax" + fireSelector).parallax().css("opacity", "0");
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.resources.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

    this.$('.modal-trigger').leanModal();
});

/**/
Template.resources_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingResourcesTitle"),
    "click .edit": App.Template.Session.setHelper("editingResourcesTitle", "title", App.Template.Jquery.focus)
});

/**/
Template.resources_icon_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingResourcesIcon"),
    "click .edit": App.Template.Session.setHelper("editingResourcesIcon", "icon", App.Template.Jquery.focus)
});

/**/
Template.resources_card_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingResourcesCardTitle"),
    "click .edit": App.Template.Session.setHelperById("editingResourcesCardTitle", App.Template.Jquery.focus)
});

/**/
Template.resources_card_icon_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingResourcesCardIcon"),
    "click .edit": App.Template.Session.setHelperById("editingResourcesCardIcon", App.Template.Jquery.focus)
});