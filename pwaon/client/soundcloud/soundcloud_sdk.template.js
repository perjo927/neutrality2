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

Template.soundcloud_sdk.events({
    "click #record": function () {
        console.log(window.SC, Session.get("SC"));
    }
});