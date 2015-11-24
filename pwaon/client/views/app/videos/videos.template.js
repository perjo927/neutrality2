var fireSelector = ".scrollfire.videos";

Template.videos.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.videos.onRendered(() => {
    $('select').material_select();
    this.$('.modal-trigger').leanModal();
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
    'keypress #videos-search': (event,template) => {
        if (event.which === 13) {
        }
        console.log(event.which)

    }
});

// TODO: Make editable