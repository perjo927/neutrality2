// TODO: Move to Lib + ES6

var fireSelector = ".scrollfire.hero";


Template.hero.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    this.$('.modal-trigger').leanModal();
});


/* */
Template.hero_signup.helpers({

});

Template.hero_signup.events({
    "submit form": function (event, template) {
        event.preventDefault();
        var formContainer = App.UI.parseForm(event);

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "signup_firstname",
                method: App.UI.validateName
            },
            {
                name: "signup_email",
                method: App.UI.validateEmail
            }
        ];

        App.UI.validateForm(formFields, formContainer, function (isValid, error) {
            var errorMessage =
                "The input was faulty from the following fields: "
                + error
                + ". Please try again.";

            Template.hero.onValidationDone(isValid, errorMessage, formContainer);
        });
    }
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