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
    },
    // TODO: Refactor to generic
    'click .more-events' : function (event, template) {
        var arrayLength = template.data.eventss.count();
        var eventsLength = Session.get("eventsLength");
        if (eventsLength < arrayLength) {
            eventsLength += 3;

            Session.set("eventsLength", eventsLength);
            if (eventsLength >=  arrayLength) {
                Session.set("eventsThresholdReached", true);
            }
        }
    },
    'click .less-events' : function (event, template) {
        Session.set("eventsLength", 4);
        Session.set("eventsThresholdReached", false);
    }
});



/* */
Template.events_top.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

/* */
Template.events_bottom.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

Template.events_bottom.helpers({
    "eventsLimited": function () {
        // TODO: refactor to generic
        var eventss = this.eventss.fetch();
        var eventsLength = Session.get("eventsLength");
        return eventss.slice(0, eventsLength);
    }
});

Template.events_text.helpers({
    overFlowText() {
        let clippedText = this.text.substring(0, 100);
        return `${clippedText} ... `;
    },
    eventsLimited() {
        // TODO: Make global generic method
        // TODO: limit to certain number requested by PO
        let eventss = this.eventss.fetch();
        let eventsLength = Session.get("eventsLength");
        return eventss.slice(0, eventsLength);
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
Template.events_date_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsDate", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsDate")
});

/* */
Template.events_location_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsLocation", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLocation")
});

/* */
Template.events_link_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsLink", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLink")
});

/* */
Template.events_text_container.events({
    "click .edit": App.Template.Session.setHelperById("editingEventsText", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsText")
});