
//
Template.sticky.onRendered(function () {
    this.$('.modal-trigger').leanModal();
});


//
Template.sticky.events({
    "click .sticky-icon": function (ev, instance) {
        Session.set("externalLink", this);
    }
});


/* */
Template.linked_content.helpers({
    "externalLink": function () {
        var el = Session.get("externalLink");
        return el;
    }
});

/* */
Template.linked_content.events({
    "click #open-link": function (ev, instance) {
        ev.preventDefault();
        console.info(this.link);
        // Router.go? location.href? call "modal"?
    }
});


/* */
Template.Facebook.onRendered(function () {
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

