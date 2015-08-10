// TODO: Move to Lib + ES6

var fireSelector = ".scrollfire.hero";


Template.hero.onRendered(function () {
    this.$(fireSelector).parallax().css("opacity", "0");
    Materialize.fadeInImage(fireSelector);

    this.$('.modal-trigger').leanModal();
});


/* */
Template.signup.helpers({

});

Template.signup.events({
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