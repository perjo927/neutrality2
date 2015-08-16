Meteor.methods({
    "processEnv": function(environmentVariable) {
        check(environmentVariable, String);
        var processEnvVar = process.env[environmentVariable];
        return processEnvVar;
    },
    "sendEmail": function (email, message, subject) {
        check([email, message, subject], [String]);

        var isEmailSent = false;
        var to = Server.Methods.ParseAssets("emailTo");

        Email.send({
            from: email, // required
            // to, cc, bcc, replyTo:  String or Array of Strings
            to: to,
            subject: subject,
            // text,html : Mail body (in plain text and/or HTML)
            text:  message
            // headers : Object - dictionary of custom headers
        });
        return isEmailSent;
    },
    "validatePin": function(pin) {
        check(pin, String);
        var answer = Server.Methods.ParseAssets("pin");
        return (pin === answer);
    }
});
