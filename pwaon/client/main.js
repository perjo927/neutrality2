Session.setDefault("externalLink", {
    color: "white",
    title: "Facebook",
    icon: "facebook-squared",
    link: "https://www.facebook.com/energymedicineheals"

});
Session.setDefault("environment", "development");
Session.setDefault("isUnlocked", false); // TODO: Remove and validate server side

// TODO: Remove when released
(function setEnvironment() {
    Meteor.apply("processEnv", ["NODE_ENV"], function(err,res) {
        if(!!res) {
            console.debug("NODE_ENV is",res);
            Session.set("environment", res);
        }
    });
})();

UI.body.rendered = function() {

};
// TODO: Refactor each content area session helper somehow

Session.setDefault("editingConsultationIcon", false);
Session.setDefault("editingConsultationText", false);
Session.setDefault("editingConsultationTitle", false);

Session.setDefault("editingConsultationModalImg", false);
Session.setDefault("editingConsultationModalText", false);
Session.setDefault("editingConsultationModalTitle", false);

Session.setDefault("editingEventsIcon", false);
Session.setDefault("editingEventsLocation", false);
Session.setDefault("editingEventsTitle", false);
Session.setDefault("editingEventsMainTitle", false);
Session.setDefault("editingEventsText", false);


Session.setDefault("editingExperiencesIcon", false);
Session.setDefault("editingExperiencesName", false);
Session.setDefault("editingExperiencesTitle", false);
Session.setDefault("editingExperiencesMainTitle", false);
Session.setDefault("editingExperiencesText", false);

Session.setDefault("editingConsultationModalImg", false);
Session.setDefault("editingConsultationModalText", false);
Session.setDefault("editingConsultationModalTitle", false);

Session.setDefault("editingIntroIcon", false);
Session.setDefault("editingIntroText", false);
Session.setDefault("editingIntroTitle", false);

Session.setDefault("editingNavbar", false);

Session.setDefault("editingHeroTitle", false);
Session.setDefault("editingHeroSubTitle", false);
Session.setDefault("editingHeroImg", false);
Session.setDefault("editingHeroText", false);


Session.setDefault("editingHeroModalTitle", false);
Session.setDefault("editingHeroModalSubTitle", false);
Session.setDefault("editingHeroModalText", false);

Session.setDefault("editingIntroModalTitle", false);
Session.setDefault("editingIntroModalText", false);

Session.setDefault("editingHeroModalConfirmationTitle", false);
Session.setDefault("editingHeroModalConfirmationSubTitle", false);
Session.setDefault("editingHeroModalConfirmationText", false);

Session.setDefault("editingTrainingTitle", false);

Session.setDefault("editingVideosTitle", false);
Session.setDefault("editingVideosText", false);

Session.setDefault("editingWorkTitle", false);
Session.setDefault("editingWorkImg", false);
Session.setDefault("editingWorkName", false);
Session.setDefault("editingWorkText", false);
