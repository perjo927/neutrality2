/* */
Template.footer_disclaimer_title_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingFooterDisclaimerTitle"),
    "click .edit": App.Template.Session.setHelper("editingFooterDisclaimerTitle", "title", App.Template.Jquery.focus)
});

/* */
Template.footer_disclaimer_text_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingFooterDisclaimerText"),
    "click .edit": App.Template.Session.setHelper("editingFooterDisclaimerText", "text", App.Template.Jquery.focus)
});
