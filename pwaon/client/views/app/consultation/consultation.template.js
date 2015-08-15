
var fireSelector = ".scrollfire.consultation";


Template.consultation.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    this.$('.modal-trigger').leanModal();
});


