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
    search("Paul Wong");
});

Template.video_list.onRendered(() => {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.videos.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
});

Template.videos_search.events({
    'click .videos-search': () => App.Template.Jquery.focus({_id: "videos-search"}),
    'keypress #videos-search': (event, template) => {
        if (event.which === 13) {
        }
        console.log(event.which)

    },
    'submit form': (event, template) => {
        event.preventDefault();
        search(event.target[0].value)
    }
});
