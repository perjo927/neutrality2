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


/*

 In order to update a sounds metadata, you create a client and call the put method, passing in the path
 of the track resource and the properties you want to update.

 You can update the track artwork using the artwork_data parameter. Please note that at this time
 it is not possible to update the actual track audio file.

 For a full list of properties that can be set on a sound resource, see the /tracks endpoint reference.

*/

// connect and update track data
//SC.connect(function() {
//    SC.get('/tracks/290', function(track) {
//        SC.put(track.permalink_url, { track: {
//            description: 'This track was recorded in Berlin',
//            genre: 'Electronic'
//        }});
//    });
//});


/*
 Once a set has been created,
 you can continue to add sounds to it by updating the tracks property.
 */

//var tracks = [290, 291, 292];
//SC.connect(function() {
//    SC.get('/me/playlists', { limit: 1 }, function(playlist) {
//        SC.put(playlist.uri, { playlist: { tracks: tracks } });
//    });
//});

/*

 To get a list of tracks in a set, send a GET request to the /playlists endpoint with the set id.

 */

//SC.get('/playlists/1234323', function(playlist) {
//    for (var i = 0; i < playlist.tracks.length; i++) {
//        console.log(playlist.tracks[i].length);
//    }
//});