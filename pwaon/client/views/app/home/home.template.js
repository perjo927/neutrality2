

// TODO: Remove after release
var isDevEnv = function () {
    return function() {
        return Session.equals("environment", "development");
    };
};

Template.home.onRendered(function () {
    $('.scrollspy').scrollSpy();

    // Init Facebook plugin
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v2.3&appId=141124435939660";
        fjs.parentNode.insertBefore(js, fjs);
    }(window.document, 'script', 'facebook-jssdk'));
});

Template.home.helpers({
    // TODO: Remove after release
    isDev: function () {
        var checkDev = isDevEnv();
        return checkDev();
    },
    // TODO: Remove after release
    isUnlocked: function() {
        var checkDev = isDevEnv();
        // TODO: User server-side validation for release
        var isUnlocked = checkDev() || Session.equals("isUnlocked", true);
        return isUnlocked;
    }
});
