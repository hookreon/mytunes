// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<div><h3><%= title %></h3><h3 class="artistClass"><%= artist %></h3></div>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.enqueue();
      console.log('LibraryEntryView.click. This model.enqueue called, model:', this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
