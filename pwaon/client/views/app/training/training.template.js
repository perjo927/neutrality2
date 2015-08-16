var fireSelector = ".scrollfire.training";


Template.training.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    //this.$('.modal-trigger').leanModal();
});

