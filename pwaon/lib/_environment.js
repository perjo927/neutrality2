

App = {
    "Http": {},
    "Collection": {},
    "collections": {},
    "Plugin": {},
    "Template": {},
    "UI": {},
    "Utils": {}
};

// Presentation collections to create
ContentAreas =
    [
        "hero",
        "intro",
        "resources",
        "consultation",
        "training",
        "experiences",
        "parallax",
        "eventss",
        "footer",
        "navbar",
        "sticky",
        "appointment",
        "videos"
    ];


VM = {
    "sections": {
    }
};

VM["contentareas"] = ContentAreas.reduce((o,v,i) => {
    o[v] = {};
    return o;
}, {}) ;


Models = {
    "consultationForms": [],
    "consultationSteps": [],
    "workshops": []
};

_YouTubePlaylists = {
    "Fears & Phobias": "PLwUG2rvQ0wJq3BibkO-_JqPWlSXgGaPK5",
    "Natural Pain Relief": "PLwUG2rvQ0wJrcwPcO_ZKIl8U96YkSmgIB",
    "Natural Weight Loss": "PLwUG2rvQ0wJoZpTA99vo8SV1s6QAekMKp",
    "Transmissions 2014": "PLRAkk0-k_rysON5a3Jgbddm2MtBFbCgFs"
};
