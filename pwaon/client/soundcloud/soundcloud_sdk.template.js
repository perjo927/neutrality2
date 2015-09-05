Template.soundcloud_sdk.onRendered(function () {
    /*

     avatar_url: "https://i1.sndcdn.com/avatars-000015174076-8ktv09-large.jpg"
     city: "Norrköping"
     country: "Sweden"
     description: "PREYBIRD composes  ... "
     first_name: "Per"
     followers_count: 1404
     followings_count: 335
     full_name: "Per Jonsson"
     last_name: "Jonsson"
     id: 741159
     locale: "en"
     online: false
     permalink: "djpjgj"
     permalink_url: "http://soundcloud.com/djpjgj"
     quota: {
     unlimited_upload_quota: false
     upload_seconds_left: -11987
     upload_seconds_used: 22786
     }
     track_count: 50
     upload_seconds_left: -11987
     uri: "https://api.soundcloud.com/users/741159"
     username: "PREYBIRD"
     website: "http://www.preybird.com"
     website_title: "PREYBIRD Productions | Official Web Site"

     */

    // update user's profile description
//                that.SC.connect(function() {
//                    SC.put('/me', {
//                                user: {description: 'I am using the SoundCloud API!'}
//                    });
//                });
});

Template.soundcloud_sdk.helpers({
    "userName": function () {
        var s = Session.get("SC");
        return s.first_name;
    }
});

//
Template.soundcloud_sdk.events({
    "click #record": function () {
        var me = Session.get("SC");
        var sc = window.SC;

        var soundTitle = $("#sound_name")[0].value;
        if (soundTitle === "") {
            soundTitle = "Recording from Art of Neutrality at " + new Date().toJSON().slice(0,10);
        }

        console.debug(soundTitle);

        // TODO
        // If successful, your track will immediately be queued up for encoding.
        // You check the state property of the track resource to check its progress.
        // Once the state is finished it is ready to be embedded or streamed.
        sc.record({
            start: function() {
                window.setTimeout(function() {
                    sc.recordStop();
                    sc.recordUpload({
                        track: { title: soundTitle }
                    });
                }, 5000);
            }
        });
    },
    'form submit': function (event, template) {
        event.preventDefault();
    }
});

