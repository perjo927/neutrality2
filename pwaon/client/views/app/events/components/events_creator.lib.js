EventUtility = class EventMaker {
    constructor(format, collection) {
        this.dateFormat = format;
        this.collection = collection;
        this.pickers = [];
    }

    createNewEvent(event) {
        const newEvent = App.UI.parseForm(event);
        const from = newEvent.dateFrom,
            to = newEvent.dateTo;

        newEvent.dateFrom = moment(from, this.dateFormat).valueOf();
        newEvent.dateTo = moment(to, this.dateFormat).valueOf();
        newEvent.archived = false;

        return newEvent;
    }

    insertNewEvent(newEvents) {
        App.Collection.insert(this.collection, newEvents, function (id) {
            //console.debug(id);
        });
    };

    updateEvent(id, modifier) {
        App.Collection.update(this.collection, id, {$set: modifier});
    };

    static getDate(time) {
        return moment(time).format('MMM D');
    }

    static getDates(from, to) {
        from = moment(from);
        to = moment(to);

        to = (from.month() !== to.month()) ? to.format("MMM Do") : to.format("Do");
        from = from.format("MMM D");

        return `${from} - ${to}`;
    }

    createPicker(id, setDate = new Date(), update = false, type = undefined, data = undefined){
        if (!!data) {
            var eventDateData = `${type}${data.id}`;
            if (this.pickers.indexOf(eventDateData) === -1 ) {
                this.pickers.push(eventDateData);
                var that = this;

                return new Pikaday({
                    field: document.getElementById(id),
                    format: that.dateFormat,
                    defaultDate: setDate,
                    onSelect(date) {
                        if (update) {
                            const modifier = {};
                            modifier[type] = moment(date).valueOf();
                            that.updateEvent(data.id, modifier);
                        }
                    }
                });
            }
            return undefined;
        }
        return new Pikaday({
            field: document.getElementById(id),
            format: this.dateFormat,
            defaultDate: setDate,
            onSelect(date) { }
        });
    };
};

EventsCreator = new EventUtility("MMM Do 'YY", App.collections["eventss"]);