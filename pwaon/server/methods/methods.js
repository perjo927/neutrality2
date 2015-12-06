Meteor.methods({
    "parseAssets": function (auth, asset) {
        check(arguments, [Match.Any]);

        if (!!auth._id) {
            auth = auth._id;
        }
        if (auth !== Meteor.userId() ) {
            console.error("Bad ID");
            return null;
        }
        return Server.Methods.ParseAssets(asset);
    },

    "processEnv": function(environmentVariable) {
        check(environmentVariable, String);
        var processEnvVar = process.env[environmentVariable];
        return processEnvVar;
    },

    "searchVideo": function(text) {
        YoutubeApi.search.list({
            channelId: "UC7JIciCwnD5jX3Z8je8-YYg",
            part: "snippet",
            type: "video",
            maxResults: 6,
            q: text
        }, Meteor.bindEnvironment(function (err, res) {
            if (!!err) {
                console.log(err);
            } else {
                console.log(res);
            }
            App.collections["videos"].remove({});
            App.collections["videos"].insert(res, (e,r) => {
                if (!!e) {
                    console.log(e);
                } else {
                    console.log(r);
                }
            });
        }));
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
