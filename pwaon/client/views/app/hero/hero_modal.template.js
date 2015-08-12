/**/
Template.hero_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalTitle", "title", App.Template.Jquery.focus)
});

