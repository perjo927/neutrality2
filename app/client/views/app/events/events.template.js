var fireSelector = ".scrollfire.eventss";

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
Template.eventss.helpers({
    getContentAreas() {
        console.log(this);
    }
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
    "click .archive-item": function () {
        if (Meteor.userId()) {
            const archiveText = (this.archived) ? "Un-Archive" : "Archive";

            Materialize.toast(
                `<span>${archiveText} event? &nbsp;</span>
                <span class="btn-flat pink-text" class="past-item"
                onclick="App.collections.eventss.update('${this._id}', {$set: {archived: ${!this.archived}}})">
                 ${archiveText}
                </span>`,
                5000
            );
        }
    },
    // TODO: Refactor to generic
    'click .more-events': function (event, template) {
        var arrayLength = Session.get("eventsCount");
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
        Session.set("eventsLength", 3);
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

Template.events_text.helpers({
    overFlowText() {
        return App.Template.overFlowText(this.text, 100);
    }
});

Template.events_history.events({
    "click .events-history": () => {
        Session.set("eventsHistory", true)
    },
    "click .events-current": () => {
        Session.set("eventsHistory", false)
    }
});

/* */
Template.events_date.onRendered(() => {
    this.$(".event_pickdate").each(function() {
        let update = true,
            name = this.name,
            data = this.dataset;

        if (this.name === "events_date_from" ) {
            let setDate = moment(this.dateFrom).toDate(),
                type = "dateFrom";

            let pickerFrom = EventsCreator.createPicker(
                this.id,
                setDate,
                update,
                type,
                name,
                data
            );
        } else {
            let setDate = moment(this.dateTo).toDate(),
                type = "dateTo";

            let pickerTo = EventsCreator.createPicker(
                this.id,
                setDate,
                update,
                type,
                name,
                data
            );
        }
    });
});

Template.events_date.helpers({
    getDateFrom() {
        return EventUtility.getDate(this.dateFrom);
    },
    getDateTo() {
        return EventUtility.getDate(this.dateTo);
    },
    getDates() {
        return EventUtility.getDates(this.dateFrom, this.dateTo);
    }
});

/* */
Template.events_icon_container.events(App.Template.registerEditableInput("editingEventsIcon", "icon"));
Template.events_main_title_container.events(App.Template.registerEditableInput("editingEventsMainTitle", "title"));
Template.events_title_container.events(App.Template.registerEditableInputById("editingEventsTitle"));
Template.events_location_container.events(App.Template.registerEditableInputById("editingEventsLocation"));
Template.events_link_container.events(App.Template.registerEditableInputById("editingEventsLink"));
Template.events_text_container.events(App.Template.registerEditableInputById("editingEventsText"));