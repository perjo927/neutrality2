
Template.hero_event.helpers({
    es6() { return "foo"; },
    "es7": () => "bar"
});

//
Template.hero_events.helpers({
    eventsLimited() {
        // TODO: Make global generic method
        // TODO: limit to certain number requested by PO
        let eventss = this.eventss.fetch();
        let eventsLength = Session.get("eventsLength");
        return eventss.slice(0, eventsLength);
    }
});

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
Template.hero_event_date_container.events(registerEditableInputById("editingEventsDate"));
Template.hero_event_location_container.events(registerEditableInputById("editingEventsLocation"));
Template.hero_event_text_container.events(registerEditableInputById("editingEventsText"));
Template.hero_event_link_container.events(registerEditableInputById("editingEventsLink"));
