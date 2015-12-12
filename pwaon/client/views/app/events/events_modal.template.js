//
Template.events_modal_date.onRendered(() => {
    this.$(".events_modal_pickdate").each(function() {
        let update = true,
            name = this.name,
            data = this.dataset;

        if (this.name === "events_modal_date_from" ) {
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
        }
        let pickerTo = EventsCreator.createPicker(
            this.id,
            setDate,
            update,
            type,
            name,
            data
        );
    });
});

Template.events_modal_date.helpers({
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

Template.events_modal_title_container.events(App.Template.registerEditableInputById("editingEventsTitle"));
Template.events_modal_location_container.events(App.Template.registerEditableInputById("editingEventsLocation"));
Template.events_modal_text_container.events(App.Template.registerEditableInputById("editingEventsText"));
Template.events_modal_link_container.events(App.Template.registerEditableInputById("editingEventsLink"));
