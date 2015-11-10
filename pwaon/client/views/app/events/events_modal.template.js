//
Template.events_modal_date.onRendered(() => {
    this.$(".events_modal_pickdate").each(function() {
        if (this.name === "events_modal_date_from" ) {
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

Template.events_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsTitle"),
    "click .edit": App.Template.Session.setHelperById("editingEventsTitle", App.Template.Jquery.focus)
});

Template.events_modal_location_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLocation"),
    "click .edit": App.Template.Session.setHelperById("editingEventsLocation", App.Template.Jquery.focus)
});


Template.events_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsText"),
    "click .edit": App.Template.Session.setHelperById("editingEventsText", App.Template.Jquery.focus)
});


Template.events_modal_link_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingEventsLink"),
    "click .edit": App.Template.Session.setHelperById("editingEventsLink", App.Template.Jquery.focus)
});
