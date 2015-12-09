let search = (text) => {
    Meteor.call("searchVideo", text, (err, res) => {
        if(!!err) {
        } else {
        }
    });
};


var fireSelector = ".scrollfire.videos";

Template._videos.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template._videos.onRendered(() => {
    $('select').material_select();
    this.$('.modal-trigger').leanModal();

    // TODO
    search("all", 50, 50);
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
        Session.set("allVideos", false);
        if (event.target[0].value === "all") {
            Session.set("allVideos", true);
        }
        search(event.target[0].value, 6, 6);
    }
});

Template.videos_menu.events({
    'click .videos-more': (event, template) => {
        let tokens = [];
        template.data.videos.forEach((element,index,array) => {
           tokens.unshift(element.nextPageToken);
        });
        Session.set("allVideos", true);

        // TODO
        search("all", 50, 50, tokens)
    }
});

Template.videos_categories.events({
    'change select': (event, template) => {
        let counts = [6, 6];
        Session.set("allVideos", false);

        if (event.target.value === "all") {
            Session.set("allVideos", true);
            counts = [50, 50];
        }
        search(event.target.value, counts[0], counts[1]);
        // TODO
    }
});
