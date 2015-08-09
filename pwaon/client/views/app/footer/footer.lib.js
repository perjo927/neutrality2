// TODO : Es6

Footer = {};


Footer.onValidationDone = function (isValid, errorMessage, formContainer) {
    var successMessage = "Meddelandet har skickats.";

    var email = formContainer["email"],
        message = formContainer["textmessage"],
        subject = formContainer["fullname"] +
            " har skickat dig ett meddelande via Yellow Dangers hemsida . ";

    var callback = function(err, res) {
        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'red');
        } else {
            Materialize.toast(successMessage, 5000, 'black');
            $('form').trigger("reset");
        }
    };

    if (isValid) {
        Meteor.call('sendEmail', email, message, subject, callback);
    } else {
        Materialize.toast(errorMessage, 5000, 'red');
    }
};
