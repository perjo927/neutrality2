// TODO : Es6

Admin = {};


Admin.onValidationDone = function (isValid, errorMessage, formContainer) {
    var successMessage = "Du &auml;r inloggad.";

    var email = formContainer["email"],
        password = formContainer["password"];

    var callback = function(err, res) {
        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'red');
        } else {
            Materialize.toast(successMessage, 5000, 'black');
            $('form').trigger("reset");
        }
    };

    if (isValid) {
        Meteor.loginWithPassword(email, password, callback);
    } else {
        Materialize.toast(errorMessage, 5000, 'red');
    }
};
