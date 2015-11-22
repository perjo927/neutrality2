

Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "contentareas": noParams,
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

        Session.set("experiencesCount", c["experiences"].find().count());
        Session.set("eventsCount", c["eventss"].find().count());

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    contentareas: c["contentareas"].findOne(),
                    navbar: c["navbar"].find(),
                    hero: c["hero"].find(),
                    intro: c["intro"].find(),
                    resources: c["resources"].find(),
                    consultation: c["consultation"].find(),
                    training: c["training"].find(),
                    parallax: c["parallax"].find(),
                    experiences: c["experiences"].find(
                        {
                            archived: Session.get("experiencesHistory")
                        },
                        {
                            limit: Session.get("experiencesLength"),
                            sort: { priority: -1 }
                        }
                    ),
                    eventss: c["eventss"].find(
                        {
                            archived: Session.get("eventsHistory")
                        },
                        {
                            sort : {dateFrom: 1 },
                            limit: Session.get("eventsLength")
                        }),
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

//
//

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


// Thanks
Router.route('/thanks', {
    name: "thanks",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "hero": noParams
        });
    },
    action: function() {
        var router = this;
        var params = router.params;

        var c = App.collections;

        router.render('opt-in', {
            data: function () {
                return {
                    hero: c["hero"].find()
                }
            }
        });
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

Router.route('/videos', {
    name: "videos",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn() {
        var noParams = false;

        return CreateSubscriptions({
            "contentareas": noParams,
            "navbar": noParams,
            "sticky": noParams,
            "appointment": noParams,
            "consultationForms": noParams,
            "consultationSteps": noParams,
            "workshops": noParams,
            "videos": noParams
        });
    },
    action(){
        var router = this;
        var params = router.params;
        var c = App.collections;

        router.render('videos', {
            data() {
                return {
                    contentareas: c["contentareas"].findOne(),
                    navbar: c["navbar"].find(),
                    consultation: c["consultation"].find(),
                    training: c["training"].find(),
                    sticky: c["sticky"].find(),
                    appointment: c["appointment"].find(),
                    consultationForms: c["consultationForms"].find(),
                    consultationSteps: c["consultationSteps"].find(),
                    workshops: c["workshops"].find(),
                    videos: c["videos"].find()
                }
            }
        });
        router.render('navbar', {
            to: "navbar",
            data() {
                return {
                    navbar: c["navbar"].find()
                }
            }
        });
    }
});

// TODO: 404, etc