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
        search(event.target[0].value, 6, 6);
    }
});

Template.videos_categories.events({
    'change select': (event, template) => {
        console.log(event.target.value, 6, 6);
        // TODO
    }
});
