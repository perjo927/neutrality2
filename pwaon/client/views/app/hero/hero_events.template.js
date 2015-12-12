
//
Template.hero_event.helpers({
    overFlowText() {
        return App.Template.overFlowText(this.text, 100);
    }
});

//
Template.hero_event_date.onRendered(() => {
    this.$(".hero_event_pickdate").each(function() {
        let update = true,
            name = this.name,
            data = this.dataset;

        if (this.name === "hero_event_date_from" ) {
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


Template.hero_event_title_container.events(App.Template.registerEditableInputById("editingEventsTitle"));
Template.hero_event_location_container.events(App.Template.registerEditableInputById("editingEventsLocation"));
Template.hero_event_text_container.events(App.Template.registerEditableInputById("editingEventsText"));
Template.hero_event_link_container.events(App.Template.registerEditableInputById("editingEventsLink"));