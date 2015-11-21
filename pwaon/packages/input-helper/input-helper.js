'use strict';

const getPropertyOrDescendantProperty = function (obj, desc) {
  if (desc.indexOf(".") === -1) {
    return obj[desc];
  }
  var arr = desc.split(".");
  while(arr.length) {
    let prop = arr.shift();
    try {
      obj = obj[prop].findOne();
    }
    catch(e) {
      return obj._id;
    }
  }
  return obj;
};

Template.InputHelper.events ({
  'change .input-helper-yann': function (e, t) {
    var data = t.data,
        modifier = {},
        value;

    if (data.options) {
      value = [];
      t.$ ('input[type=checkbox]').each (function () {
        if (this.checked) {
          value.push ($ (this).val ());
        }
      });
    } else {
      value = e.target.value;
    }

    if (!data.document._id) {
      data.document["_id"] = App.collections[data.collection].findOne()._id;
    }

    if (data.collection) {
      modifier[data.attribute] = value;
      let collection = App.collections[data.collection];
      collection.update ({_id: data.document._id}, {$set: modifier});
    } else if (data.session) {
      Session.set (data.session, value);
    }
  }
});


Template.InputHelper.helpers ({
  selected_value: function (name) {
    var data = Template.parentData ();
    return name === Session.get (data.session) ? 'selected' : '';
  },
  value: function (field) {
    var parent_data_context = Template.parentData (),
      collection = parent_data_context && parent_data_context.collection;

    if(collection){
      var obj = this;

      if (field.indexOf(".") === -1) {
        return obj[field];
      }

      var arr = field.split(".");
      while(arr.length) {
        let property = arr.shift();
        if (!obj.hasOwnProperty(property)) {
          continue;
        }
        obj = obj[property];
      }
      return obj;
    } else if (this.session){
     return Session.get(this.session);
    }
  },
  selected : function (value) {
    var data = Template.parentData();
    return _.contains(Session.get(data.session), value) ? 'checked' : '';
  },
  isBase: function () {
    var data = this;
    return data && _.isUndefined (data.select) && _.isUndefined (data.options);
  }
});

Template.InputHelper.onRendered (function () {
  var data = this.data;
  if (data.type === 'date-time') {
    this.$ ('input').datetimepicker ({
      format: 'DD/MM/YYYY'
    });
  }
});
