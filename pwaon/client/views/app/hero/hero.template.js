// TODO: Move to Lib + ES6

var fireSelector = ".scrollfire.hero";


Template.hero.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    this.$('.modal-trigger').leanModal();
});


// TODO: Refactor the mess
/**/
Template.hero_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroTitle", "title", App.Template.Jquery.focus)
});

/**/
Template.hero_subtitle_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroSubTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroSubTitle", "subTitle", App.Template.Jquery.focus)
});

/**/
Template.hero_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroText"),
    "click .edit": App.Template.Session.setHelper("editingHeroText", "text", App.Template.Jquery.focus)
});

/**/
Template.hero_img_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroImg"),
    "click .edit": App.Template.Session.setHelper("editingHeroImg", "img", App.Template.Jquery.focus)
});