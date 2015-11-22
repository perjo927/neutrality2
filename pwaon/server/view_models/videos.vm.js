const videosTitle = {
    icon: "mdi-action-theaters",
    title: "Videos"
};

VM.contentareas["videos"] = videosTitle;

const video1 = {
    title: "Healing",
    category: "Healing",
    keywords: ["healing"],
    link: "https://www.youtube.com/embed/videoseries?list=PL44F2F92C7C671168"
},
video2 = {
    title: "Energy medicine",
    category: "Health",
    keywords: ["healing", "health", "energy", "medicine"],
    link: "https://www.youtube.com/embed/videoseries?list=PL44F2F92C7C671168"
},
video3 = {
    title: "Energy medicine",
    category: "Health",
    keywords: ["healing", "health", "energy", "medicine"],
    link: "https://www.youtube.com/embed/videoseries?list=PL44F2F92C7C671168"
};


VM.sections["videos"] = [
    video1, video2, video3
];