var fireSelector = ".scrollfire.resources";

Template.resources.scrollFireContent = function () {
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
Template.resources_title_container.events(App.Template.registerEditableInput("editingResourcesTitle", "title"));
Template.resources_text_container.events(App.Template.registerEditableInput("editingResourcesText", "text"));
Template.resources_icon_container.events(App.Template.registerEditableInput("editingResourcesIcon", "icon"));
Template.resources_card_title_container.events(App.Template.registerEditableInputById("editingResourcesCardTitle"));
Template.resources_card_icon_container.events(App.Template.registerEditableInputById("editingResourcesCardIcon"));