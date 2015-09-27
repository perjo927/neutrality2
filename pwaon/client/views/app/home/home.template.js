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

});
