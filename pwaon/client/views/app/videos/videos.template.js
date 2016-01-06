//
//let search = (text, numResults1, numResults2, pageTokens) => {
//    //Meteor.call("searchVideo", text, numResults1, numResults2, pageTokens, (err,res) => console.debug(err, res) );
//};


var fireSelector = ".scrollfire.videos";

Template._videos.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template._videos.onRendered(() => {
    $('select').material_select();
    this.$('.modal-trigger').leanModal();
});

Template.video_list.onRendered(() => {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template._videos.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

Template.videos_search.events({
    'click .videos-search': () => App.Template.Jquery.focus({_id: "videos-search"}),
    'keypress #videos-search': (event, template) => {

        // TODO: Filter for every keypress (?)
        //Session.set("isSearch", event.target.value);
        //Session.set("selectedPlaylist", false);

        //if (event.which === 13) {
        //}
    },
    'submit form': (event, template) => {
        event.preventDefault();
        Session.set("videosLength", 100);
        Session.set("isSearch", event.target[0].value);
        Session.set("selectedPlaylist", false);
        //
        //search(event.target[0].value, 6, 6);
    }
});

Template.video_list.helpers({
    "isSelectedPlaylist" () {
        let selectedPlaylist = Session.get("selectedPlaylist");
        return selectedPlaylist === this.id;
    },
    "videoContainsText" () {
        let target = this.snippet.title + this.snippet.description,
            search = Session.get("isSearch");
        let contains = (target.toLowerCase().indexOf(search) > -1);
        return contains;
    }
});

Template.video_list.events({
    // TODO: Refactor to generic
    'click .more-videos': function (event, template) {
        let arrayLength = Session.get("videosCount");
        let videosLength = Session.get("videosLength");

        if (videosLength < arrayLength) {
            videosLength += 3;
            Session.set("videosLength", videosLength);

            if (videosLength >= arrayLength) {
                Session.set("videosThresholdReached", true);
            }
        }
    },
    'click .less-videos': function (event, template) {
        Session.set("videosLength", 3);
        Session.set("videosThresholdReached", false);
    }
});

Template.videos_menu.helpers({
    //nextPageTokens() {
    //    let token = false;
    //    this.videos.forEach((e,i,a) => {
    //        if (!!e.nextPageToken) {
    //            token = true;
    //        }
    //    });
    //    return token;
    //},
    //prevPageTokens() {
    //    let token = false;
    //    this.videos.forEach((e,i,a) => {
    //        if (!!e.prevPageToken) {
    //            token = true;
    //        }
    //    });
    //    return token;
    //}
});

Template.videos_menu.events({
    //'click .videos-more': (event, template) => {

        //let tokens = [];
        //
        //template.data.videos.forEach((element,index,array) => {
        //    if(!!element.nextPageToken) {
        //        tokens.unshift(element.nextPageToken);
        //    }
        //});
        //
        //search("all", 5, 5, tokens)
    //},
    //'click .videos-less': (event, template) => {
        //let tokens = [];
        //
        //template.data.videos.forEach((element,index,array) => {
        //    if(!!element.prevPageToken) {
        //        tokens.unshift(element.prevPageToken);
        //    }
        //});
        //
        //search("all", 5, 5, tokens)
    //}
});

Template.videos_categories.helpers({
});

Template.videos_categories.events({
    'change select': (event, template) => {

        let selectedValue = event.target.value;
        let isPlaylist = selectedValue !== "all";
        let selectedPlaylist = isPlaylist ? selectedValue : isPlaylist ;

        Session.set("selectedPlaylist", selectedPlaylist);
        Session.set("isSearch", false);
        Session.set("videosLength", 9);

        //let counts = [6, 6];
        //
        //if (event.target.value === "all") {
        //    counts = [6, 6];
        //}
        //search(event.target.value, counts[0], counts[1]);
    }
});

/* */
Template.videos_icon_container.events(App.Template.registerEditableInput("editingVideosIcon", "icon"));
Template.videos_main_title_container.events(App.Template.registerEditableInput("editingVideosMainTitle", "title"));