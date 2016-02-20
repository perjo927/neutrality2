// TODO: Activate in prod

Meteor.AppCache.config({
    chrome: false,
    firefox: false,
    ie: false,
    safari: false,
    chromium: false
});

// TODO
//Meteor.AppCache.config({
//    onlineOnly: [
//        //'/packages/jquery.js', // example
//    ]
//});