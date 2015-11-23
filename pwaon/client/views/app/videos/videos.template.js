// TODO: show staggered list

Template.videos.onRendered(() => {
    $('select').material_select();
});

Template.video_list.onRendered(() => {
});

Template.videos_search.events({
    'click .videos-search': () => App.Template.Jquery.focus({_id: "videos-search"})
});