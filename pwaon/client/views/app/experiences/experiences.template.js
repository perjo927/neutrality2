var fireSelector = ".scrollfire" + "." + "experiences";


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
                '<span>Remove testimonial? &nbsp;</span>' +
                '<span class="btn-flat pink-text" class="delete-item" ' +
                'onclick= App.collections.experiences.remove(\'' +
                this._id +
                '\')>' +
                ' REMOVE ' +
                '</span>', 5000
            );
        }
    },
    // TODO: Refactor to generic
    'click .more-testimonials' : function (event, template) {
        var arrayLength = template.data.experiences.count();
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
        Session.set("experiencesLength", 4);
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
    "overFlowText": function () {
        return this.text.substring(0,100) + " ... ";
    },
    // TODO: refactor to generic
    "experiencesLimited": function () {
        var experiences = this.experiences.fetch();
        var experiencesLength = Session.get("experiencesLength");
        return experiences.slice(0,experiencesLength);
    }
});


/* */
Template.experiences_main_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesMainTitle"),
    "click .edit": App.Template.Session.setHelper("editingExperiencesMainTitle", "text", App.Template.Jquery.focus)
});

/* */
Template.experiences_icon_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesIcon"),
    "click .edit": App.Template.Session.setHelper("editingExperiencesIcon", "text", App.Template.Jquery.focus)
});

/* */
Template.experiences_name_container.events({
    "click .edit": App.Template.Session.setHelperById("editingExperiencesName", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingExperiencesName")
});