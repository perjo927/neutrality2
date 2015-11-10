
//
Template.hero_event.helpers({
    overFlowText() {
        let clippedText = this.text.substring(0, 100);
        return `${clippedText} ... `;
    }
});

// TODO: Make global
let registerEditableInputById = (identifier) => {
    return {
        "keypress input": App.Template.Session.toggleAfterKeyPress(identifier),
        "click .edit": App.Template.Session.setHelperById(identifier, App.Template.Jquery.focus)
    };
};

Template.hero_event_title_container.events(registerEditableInputById("editingEventsTitle"));
Template.hero_event_location_container.events(registerEditableInputById("editingEventsLocation"));
Template.hero_event_text_container.events(registerEditableInputById("editingEventsText"));
Template.hero_event_link_container.events(registerEditableInputById("editingEventsLink"));

//
Template.hero_event_date.onRendered(() => {
    this.$(".hero_event_pickdate").each(function() {
        if (this.name === "hero_event_date_from" ) {
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

Template.hero_event_date.helpers({
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
