Template.admin.events({
    "submit form": function (event) {
        event.preventDefault();

        var formContainer = App.UI.parseForm(event);

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "fullname",
                method: App.UI.validateName
            },
            {
                name: "email",
                method: App.UI.validateEmail
            }
        ];

        App.UI.validateForm(formFields, formContainer, function (isValid, error) {
            var errorMessage =
                "F&ouml;ljande formul&auml;r hade felaktig data: "
                + error
                + ". Var god f&ouml;rs&ouml;k igen.";

            Admin.onValidationDone(isValid, errorMessage, formContainer);
        });
    }
});


