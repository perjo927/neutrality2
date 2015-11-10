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
    // TODO: Refactor to generic (for experiences)
    'click .more-events' : function (event, template) {
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
        let length = Session.set("eventsLength");
        Session.set("eventsLength", 3 );
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
        let clippedText = this.text.substring(0, 100);
        return `${clippedText} ... `;
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
Template.events_date.onRendered(() => {
    this.$(".event_pickdate").each(function() {
        if (this.name === "events_date_from" ) {
            let pickerFrom = EventsCreator.createPicker(
                this.id,
                setDate = moment(this.dateFrom).toDate(),
                update = true,
                type = "dateFrom",
                name = this.name,
                data = this.dataset
            );
        } else {
            let pickerTo = EventsCreator.createPicker(
                this.id,
                setDate = moment(this.dateTo).toDate(),
                update = true,
                type = "dateTo",
                name = this.name,
                data = this.dataset
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