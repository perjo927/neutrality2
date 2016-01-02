

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
    "Transmissions": "PLRAkk0-k_rysON5a3Jgbddm2MtBFbCgFs",
    "Fears & Phobias": "PLRAkk0-k_rysON5a3Jgbddm2MtBFbCgFs",
    "Natural Pain Relief": "PLRAkk0-k_rysON5a3Jgbddm2MtBFbCgFs",
    "Natural Pain Loss": "PLRAkk0-k_rysON5a3Jgbddm2MtBFbCgFs"
};
