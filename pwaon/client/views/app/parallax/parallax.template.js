var fireSelector = "#img-fire";


Template.parallax.scrollFireContent = function () {
    Materialize.fadeInImage(fireSelector)
};

Template.parallax.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.parallax.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
    this.$('.parallax').parallax();

});
