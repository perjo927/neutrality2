Template.soundcloud_callback.onRendered(function () {
    window.opener.setTimeout(window.opener.SC.connectCallback, 1)
});
