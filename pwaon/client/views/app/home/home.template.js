

// TODO: Remove after release
var isDevEnv = function () {
        return function() {
                return Session.equals("environment", "development");
        };
};

Template.home.onRendered(function () {
        $('.scrollspy').scrollSpy();
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
