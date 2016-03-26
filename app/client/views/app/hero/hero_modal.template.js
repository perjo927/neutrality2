/**/
Template.hero_modal_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalTitle", "title", App.Template.Jquery.focus)
});
Template.hero_modal_title_container.helpers({
    'modalDocument': function () {
        var modal = this.modal;
        modal._id = this._id;
        return modal;
    }
});


/* */
Template.hero_modal_subtitle_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalSubTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalSubTitle", "subTitle", App.Template.Jquery.focus)
});

Template.hero_modal_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalText"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalText", "modal.text", App.Template.Jquery.focus)
});


Template.hero_modal_confirmation_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalConfirmationTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalConfirmationTitle", "modal.confirmationTitle", App.Template.Jquery.focus)
});


Template.hero_modal_confirmation_subtitle_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalConfirmationSubTitle"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalConfirmationSubTitle", "modal.confirmationSubTitle", App.Template.Jquery.focus)
});


Template.hero_modal_confirmation_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingHeroModalConfirmationText"),
    "click .edit": App.Template.Session.setHelper("editingHeroModalConfirmationText", "modal.confirmationText", App.Template.Jquery.focus)
});
