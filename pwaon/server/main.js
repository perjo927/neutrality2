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
        //console.log(err);
    }
};

Meteor.startup(function () {
    createAdminUser();
    Accounts.config({
        forbidClientAccountCreation: true
    });
});