var fireSelector = ".scrollfire" + "." + "experiences";


Template.experiences.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.experiences.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.intro.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

    this.$('.modal-trigger').leanModal();
});

Template.experiences_bottom.helpers({
    "overFlowText": function () {
        return this.text.substring(0,75) + " ... ";
    }
});