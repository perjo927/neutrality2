var fireSelector = ".scrollfire" + "." + "eventss";


Template.eventss.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.eventss.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.events.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

//
Template.eventss.events({
    "click .remove-item": function () {
        if (Meteor.userId()) {
            Materialize.toast(
                '<span>Remove event? &nbsp;</span>' +
                '<span class="btn-flat pink-text" class="delete-item" ' +
                'onclick= App.collections.eventss.remove(\'' +
                this._id +
                '\')>' +
                ' REMOVE ' +
                '</span>', 5000
            );
        }
    }
});

Template.events_top.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

/* */
Template.events_bottom.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

Template.events_bottom.helpers({
    "overFlowText": function () {
        return this.text.substring(0,100) + " ... ";
    }
});


/* */
Template.events_icon_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsIcon"),
    "click .edit": App.Template.Session.setHelper("editingEventsIcon", "icon", App.Template.Jquery.focus)
});


/* */
Template.events_main_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsMainTitle"),
    "click .edit": App.Template.Session.setHelper("editingEventsMainTitle", "title", App.Template.Jquery.focus)
});


/* */
Template.events_title_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsTitle", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsTitle")
});

/* */
Template.events_location_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsLocation", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLocation")
});