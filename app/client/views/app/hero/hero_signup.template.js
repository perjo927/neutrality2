/* */
Template.hero_signup.helpers({

});

Template.hero_signup.events({
    "submit form": function (event, template) {
        return;

        event.preventDefault();

        var formContainer = App.UI.parseForm(event);

        // If admin is active, do nothing
        if (Meteor.userId()) {
            $("#signup_form").addClass("hide");
            $("#confirmation").removeClass("hide");
            return;
        }

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "firstname",
                method: App.UI.validateName
            },
            {
                name: "email",
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