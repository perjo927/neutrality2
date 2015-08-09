var fireSelector = ".scrollfire" + "." + "icons";


Template.intro.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.intro.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.intro.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

});

// TODO: Refactor the mess
/**/
Template.intro_top.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroTitle"),
    "click .edit": App.Template.Session.setHelper("editingIntroTitle", "mdTitle", App.Template.Jquery.focus)
});

/* */
Template.intro_text_container.events({
    "click .edit": App.Template.Session.setHelperById("editingIntroText", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroText")
});

/* */
Template.intro_icon_container.events({
    "click .edit": App.Template.Session.setHelperById("editingIntroIcon", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroIcon")
});
