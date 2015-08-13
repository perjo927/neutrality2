// Ugly hack for yann-inputhelper
Template.InputHelper.helpers({
    value : function (field) {
        var value = App.Utils.getPropertyOrDescendantProperty(this, field);
        return value;
    }
});