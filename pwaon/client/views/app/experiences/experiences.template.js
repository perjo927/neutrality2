var fireSelector = ".scrollfire.experiences";


Template.experiences.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.experiences.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.experiences.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

//
Template.experiences.events({
    "click .remove-item": function () {
        if (Meteor.userId()) {
            Materialize.toast(
                '<span>Remove event? &nbsp;</span>' +
                '<span class="btn-flat pink-text" class="delete-item" ' +
                'onclick= App.experiences.eventss.remove(\'' +
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
                onclick="App.collections.experiences.update('${this._id}', {$set: {archived: ${!this.archived}}})">
                 ${archiveText}
                </span>`,
                5000
            );
        }
    },
    // TODO: Refactor to generic
    'click .more-testimonials' : function (event, template) {
        var arrayLength = Session.get("experiencesCount");
        var experiencesLength = Session.get("experiencesLength");

        if (experiencesLength < arrayLength) {
            experiencesLength += 3;
            Session.set("experiencesLength", experiencesLength);

            if (experiencesLength >=  arrayLength) {
                Session.set("experiencesThresholdReached", true);
            }
        }
    },
    'click .less-testimonials' : function (event, template) {
        Session.set("experiencesLength", 3);
        Session.set("experiencesThresholdReached", false);
    }
});


/* */
Template.experiences_top.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

/* */
Template.experiences_bottom.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});

Template.experiences_bottom.helpers({
    overFlowText() {
        return App.Template.overFlowText(this.text, 100);
    }
});

Template.experiences_history.events({
    "click .experiences-history": () => {
        Session.set("experiencesHistory", true)
    },
    "click .experiences-current": () => {
        Session.set("experiencesHistory", false)
    }
});


/* */
Template.experiences_main_title_container.events(App.Template.registerEditableInputById("editingExperiencesMainTitle"));
Template.experiences_icon_container.events(App.Template.registerEditableInputById("editingExperiencesIcon"));
Template.experiences_name_container.events(App.Template.registerEditableInputById("editingExperiencesName"));