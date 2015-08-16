var fireSelector = ".scrollfire" + "." + "parallax";

Template.parallax.scrollFireContent = function () {
    Materialize.fadeInImage(fireSelector);
};

Template.parallax.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    var options = [
        {
            selector: fireSelector,
            offset: 1,
            callback: "Template." + "parallax" + ".scrollFireContent()"
        }
    ];
    Materialize.scrollFire(options);
});
