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
                //+ error
                "Please try again";

            Admin.onValidationDone(isValid, errorMessage, formContainer);
        });
    },
    "click #log-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("You are now signed out.", 5000, 'black');
    }
});
