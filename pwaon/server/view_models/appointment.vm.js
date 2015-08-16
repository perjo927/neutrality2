
var actionButton = {
    icon: "mdi-action-alarm",
    color: "pink",
    text: "MAKE AN APPOINTMENT"
};

var appointment1 =
    {
        color: "blue",
        icon: "mdi-editor-attach-file",
        title: "Hosting workshop",
        link: "#appointment_modal",
        modal: {
            color: "black",
            title: "Title",
            text: "Text"
        }
    };

var appointment2 =
    {
        color: "red",
        icon: "mdi-editor-insert-chart",
        title: "Consultation Form",
        link: "#appointment_modal",
        modal: {
            color: "black",
            title: "Title",
            text: "Text"
        }
    };

var appointment3 =
    {
        color: "yellow darken-1",
        icon: "mdi-editor-format-quote",
        title: "Release Form",
        link: "#appointment_modal",
        modal: {
            color: "black",
            title: "Title",
            text: "Text"
        }
    };

var appointment4 =
    {
        color: "green",
        icon: "mdi-editor-publish",
        title: "Payment Link",
        link: "#appointment_modal",
        modal: {
            color: "black",
            title: "Title",
            text: "Text"
        }
    };

/* */
//VM.sections.appointment.docs = {
//    actionButton: actionButton,
//    iconSectionItems: iconSectionItems
//};


/**/
VM.sections["appointment"] = [
    appointment1, appointment2, appointment3, appointment4
];