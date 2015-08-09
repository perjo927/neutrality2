// TODO: ES6


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;

        return CreateSubscriptions({
            "intro": noParams,
            "work": noParams,
            "team": noParams,
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
                    intro: c["intro"].find(),
                    work: c["work"].find(),
                    team: c["team"].find(),
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