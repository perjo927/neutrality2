// TODO: ES6


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "hero": noParams,
            "intro": noParams,
            "videos": noParams,
            "consultation": noParams,
            "training": noParams,
            "experiences": noParams,
            "eventss": noParams,
            "navbar": noParams
        });
    },
    action: function(){
        var router = this;
        var c = App.collections;

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    hero: c["hero"].find(),
                    intro: c["intro"].find(),
                    videos: c["videos"].find(),
                    consultation: c["consultation"].find(),
                    training: c["training"].find(),
                    experiences: c["experiences"].find(),
                    eventss: c["eventss"].find(),
                    navbar: c["navbar"].find()
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
            to: "footer"
        });
    }
});

Router.route('/admin', {
    name: "admin",
    loadingTemplate: "loading",
    layoutTemplate: "admin_app",
    onBeforeAction: function () {
        if (Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    },
    action: function(){
        var router = this;
        router.render('admin', {});
    }
});

// TODO: 404, etc