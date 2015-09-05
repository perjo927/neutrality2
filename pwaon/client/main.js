
// TODO: Remove when released
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

//
Session.setDefault("SC", null);

//
Session.setDefault("experiencesLength", 3+1); // +1 For the title, a bit messy yes
Session.setDefault("experiencesThresholdReached", false);

Session.setDefault("eventsLength", 3+1); // +1 For the title
Session.setDefault("eventsThresholdReached", false);


// TODO: Refactor each content area session helper somehow
Session.setDefault("editingAppointmentModalTitle", false);
Session.setDefault("editingAppointmentModalText", false);

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

Session.setDefault("editingFooterTitle", false);
Session.setDefault("editingFooterText", false);
Session.setDefault("editingFooterDisclaimerTitle", false);
Session.setDefault("editingFooterDisclaimerText", false);

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

Session.setDefault("editingParallaxTitle", false);

Session.setDefault("editingResourcesTitle", false);
Session.setDefault("editingResourcesText", false);
Session.setDefault("editingResourcesIcon", false);
Session.setDefault("editingResourcesCardTitle", false);
Session.setDefault("editingResourcesCardIcon", false);

Session.setDefault("editingTrainingTitle", false);
Session.setDefault("editingTrainingIcon", false);
Session.setDefault("editingTrainingTitle", false);
Session.setDefault("editingTrainingText", false);
Session.setDefault("editingTrainingCardText", false);

Session.setDefault("editingWorkTitle", false);
Session.setDefault("editingWorkImg", false);
Session.setDefault("editingWorkName", false);
Session.setDefault("editingWorkText", false);
