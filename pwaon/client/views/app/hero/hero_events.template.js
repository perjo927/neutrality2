
Template.hero_event.helpers({
    es6() { return "foo"; },
    "es7": () => "bar"
});

Template.hero_events.helpers({
    eventsLimited() {
        // TODO: refactor to generic
        let eventss = this.eventss.fetch();
        let eventsLength = Session.get("eventsLength");
        return eventss.slice(0, eventsLength);
    }
});


Template.hero_event.helpers({
    overFlowText() {
        let clippedText = this.text.substring(0, 100);
        return `${clippedText} ... `;
    }
});
