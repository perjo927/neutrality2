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

    // TODO: refactor with lists
    "searchVideo": function(text, count1, count2, nextPageTokens) {

        let callback = Meteor.bindEnvironment(function (err, res) {
            if (!!err) {
                console.log(err);
            } else {
            }
            App.collections["videos"].insert(res, (e,r) => {
                if (!!e) {
                    console.log(e);
                } else {
                }
            });
        });


        let func = "search";

        App.collections["videos"].remove({});

        if (text === "all") {

            let search1 = {
                channelId: "UC7JIciCwnD5jX3Z8je8-YYg",
                part: "snippet",
                order: "date",
                maxResults: count1
            },
                search2 = {
                channelId: "UCPmIqJvZg7SCel4aWEGdtVg",
                part: "snippet",
                order: "date",
                maxResults: count2
            };

            if (!!nextPageTokens) {
                // TODO: each
                search1["pageToken"] = nextPageTokens[0];
                search2["pageToken"] = nextPageTokens[1];
            }

            YoutubeApi[func].list(search1, callback);
            YoutubeApi[func].list(search2, callback);

        } else {

            let search1 = {
                channelId: "UC7JIciCwnD5jX3Z8je8-YYg",
                part: "snippet",
                type: "video",
                order: "relevance",
                maxResults: count1,
                q: text
            },
                search2 = {
                channelId: "UC7JIciCwnD5jX3Z8je8-YYg",
                part: "snippet",
                type: "video",
                order: "relevance",
                maxResults: count2,
                q: text
            };

            YoutubeApi[func].list(search1, callback);
            YoutubeApi[func].list(search2, callback);
        }
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
