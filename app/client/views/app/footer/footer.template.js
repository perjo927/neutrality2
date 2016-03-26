Template.footer.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});


/* */
Template.footer_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingFooterTitle"),
    "click .edit": App.Template.Session.setHelper("editingFooterTitle", "title", App.Template.Jquery.focus)
});

/* */
Template.footer_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingFooterText"),
    "click .edit": App.Template.Session.setHelper("editingFooterText", "text", App.Template.Jquery.focus)
});


Template.footer_text.helpers({
    "overFlowText": function () {
        return this.text.substring(0,175) + " ... ";
    }
});
