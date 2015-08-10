
Template.hero.onValidationDone = function (isValid, errorMessage, formContainer) {
    var modal = $("#contact_modal");

    var successMessage = "Message has been sent successfully.",
        textMessage = " would like to receive free Opening The Heart energy transmissions.";

    var email = formContainer["signup_email"],
        message = formContainer["signup_firstname"] + "( " + email + " )" + textMessage,
        subject = formContainer["signup_firstname"] +
            " has sent you a message from the Free Instant Access subscription form at artofneutrality.com. ";

    var callback = function(err, res) {
        console.info(err, res);

        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'pink');
        } else {
            Materialize.toast(successMessage, 5000, 'cyan');
            $('form').trigger("reset");
        }
    };

    if (isValid) {
        Meteor.call('sendEmail', email, message, subject, callback);
        $("#signup_form").addClass("hide");
        $("#confirmation").removeClass("hide");
    } else {
        Materialize.toast(errorMessage, 5000, 'pink');
    }
};