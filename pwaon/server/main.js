// TODO: ES6
var createAdminUser = function () {
    var admin = Server.Methods.ParseAssets("admin");

    try {
        Accounts.createUser({
            "username": admin["username"],
            "email": admin["email"],
            "password": admin["password"]
        });
    } catch (err) {
        console.log(err);
    }
};

Meteor.startup(function () {
    createAdminUser();
    Accounts.config({
        forbidClientAccountCreation: true
    });
    YoutubeApi.authenticate({
        type: 'key',
        key: Server.Methods.ParseAssets("web").browser_key
    });
    //YoutubeApi.authenticate({
    //    type: 'oauth',
    //    key: Server.Methods.ParseAssets("web").client_id
    //});
    Meteor.call("searchVideo", "all", 50, 50 /*, (err,res) => console.log(err, res) */);

    let interval = 1000 * 60 * 60 * 2; // Search every other hour for a new video
    Meteor.setInterval(() => {
        // TODO: Ideally only one instance of results (50 instead of 50,50)
        Meteor.call("searchVideo", "all", 50, 50 /*, (err,res) => console.log(err, res) */);
    }, interval)
});