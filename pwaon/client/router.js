// TODO: Remove after release
var validatePin = function (params) {
    if (params.query.hasOwnProperty("pin")) {
        var pin = params.query.pin;

        Meteor.call("validatePin", pin, function(err,res){
            if(!!res) {
                Session.set("isUnlocked", res);
            }
        });
    }
};


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
            "videos": noParams,
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

        // TODO: Remove in release
        validatePin(params);

        var c = App.collections;

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    navbar: c["navbar"].find(),
                    hero: c["hero"].find(),
                    intro: c["intro"].find(),
                    videos: c["videos"].find(),
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