

Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "navbar": noParams,
            "hero": noParams,
            "intro": noParams,
            "resources": noParams,
            "consultation": noParams,
            "training": noParams,
            "experiences": noParams,
            "parallax": noParams,
            "eventss": noParams,
            "footer": noParams,
            "sticky": noParams,
            "appointment": noParams,
            "consultationForms": noParams,
            "consultationSteps": noParams,
            "workshops": noParams

        });
    },
    action: function(){
        var router = this;
        var params = router.params;

        var c = App.collections;

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    navbar: c["navbar"].find(),
                    hero: c["hero"].find(),
                    intro: c["intro"].find(),
                    resources: c["resources"].find(),
                    consultation: c["consultation"].find(),
                    training: c["training"].find(),
                    experiences: c["experiences"].find(),
                    parallax: c["parallax"].find(),
                    eventss: c["eventss"].find(),
                    sticky: c["sticky"].find(),
                    appointment: c["appointment"].find(),
                    consultationForms: c["consultationForms"].find(),
                    consultationSteps: c["consultationSteps"].find(),
                    workshops: c["workshops"].find()
                }
            }
        });
        router.render('navbar', {
            to: "navbar",
            data: function () {
                return {
                    navbar: c["navbar"].find()
                }
            }
        });
        router.render('footer', {
            to: "footer",
            data: function () {
                return {
                    footer: c["footer"].find()
                }
            }
        });
    }
});

Router.route('/admin', {
    name: "admin",
    loadingTemplate: "loading",
    layoutTemplate: "admin_app",

    action: function(){
        var router = this;
        router.render('admin', {});
    }
});

// SC
Router.route('/soundcloud', {
    name: "soundcloud_sdk",
    loadingTemplate: "loading",
    layoutTemplate: "soundcloud_app",
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    },
    action: function(){
        var router = this;
        router.render('soundcloud_sdk', {});
    }
});

// SC
Router.route('/callback', {
    name: "soundcloud_callback",
    loadingTemplate: "loading",
    layoutTemplate: "soundcloud_app",
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    },
    action: function(){
        var router = this;
        router.render('soundcloud_callback', {});
    }
});

// YouTube
Router.route('/youtube', {
    name: "youtube_sdk",
    loadingTemplate: "loading",
    layoutTemplate: "youtube_app",
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    },
    action: function(){
        var router = this;
        router.render('youtube_sdk', {});
    }
});


// TODO: 404, etc