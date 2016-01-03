// TODO
let search = (text, numResults1, numResults2, pageTokens) => {
    //Meteor.call("searchVideo", text, numResults1, numResults2, pageTokens, (err,res) => console.debug(err, res) );
};


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
        // TODO: Filter for every keypress
        if (event.which === 13) {
        }
    },
    'submit form': (event, template) => {
        event.preventDefault();
        // TODO: Refactor search
        //search(event.target[0].value, 6, 6);
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

Template.video_list.helpers({
   "isSelectedPlaylist" () {
       console.debug(this);
       let selectedPlaylist = Session.get("selectedPlaylist");
       return selectedPlaylist === this.id;
   }
});

Template.videos_menu.helpers({
    // TODO: Not needed
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
        // TODO: Refactor
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
        // TODO: Refactor
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
        //console.info(event.target.value,template,this, _YouTubePlaylists);

        let selectedValue = event.target.value;
        let isPlaylist = selectedValue !== "all";
        let selectedPlaylist = isPlaylist ? selectedValue : isPlaylist ;

        Session.set("selectedPlaylist", selectedPlaylist);

        // TODO: Refactor/not needed
        //let counts = [6, 6];
        //
        //if (event.target.value === "all") {
        //    counts = [6, 6];
        //}
        //search(event.target.value, counts[0], counts[1]);
    }
});
