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
        let processEnvVar = process.env[environmentVariable];
        return processEnvVar;
    },

    // TODO: refactor with lists for the channels ... or wait until there's only one channel
    //"searchVideo": function(text, count1, count2, pageTokens) {
    "searchVideo": function(text, count1, count2) {

        let callback = Meteor.bindEnvironment(function (err, res) {
            if (!!err) {
                console.log("err", err);
            } else {
                res.items.forEach((element, index, array) => {
                    element["publishedAt"] = element.snippet.publishedAt;
                    App.collections["videos"].insert(element, (e,r) => {
                        if (!!e) {
                            console.log(e);
                        } else {
                        }
                    });
                })
            }
        });

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

            // TODO: Not needed currently
            //if (!!pageTokens) {
            //    // TODO: each
            //    search1.pageToken = (!!pageTokens[0] ) ? pageTokens[0] : null;
            //    search2.pageToken = (!!pageTokens[1] ) ? pageTokens[1] : null;
            //}
            YoutubeApi.search.list(search1, callback);
            YoutubeApi.search.list(search2, callback);

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

            YoutubeApi.search.list(search1, callback);
            YoutubeApi.search.list(search2, callback);
        }
    },
    "searchPlaylist" (id, count) {

        let callback = Meteor.bindEnvironment(function (err, res) {
            if (!!err) {
                console.log(err);
            } else {

                let key = Object.keys(_YouTubePlaylists).filter(function(key) {
                    return _YouTubePlaylists[key] === id
                })[0];

                res.id = id;
                res.title = key;

                YouTubePlaylists.insert(res, (e,r) => {
                    if (!!e) {
                        console.log(e);
                    } else {
                    }
                });
            }
        });

        let search = {
            playlistId: id,
            part: "snippet",
            order: "date",
            maxResults: count
        };

        YoutubeApi.playlistItems.list(search, callback);
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
