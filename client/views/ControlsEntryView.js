//ControlsEntryView.js

var ControlsEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<button class="prev">previous</button><button class="next">next</button>'),



//Penmding below this:
   events: {
    'click .next': function() {
      // this.model.play();
      this.collection.playNext();
      console.log('LibraryEntryView.click. This model.enqueue called, model:', this.model);
      },

    'click .prev': function() {
      // this.model.play();
      this.collection.playPrev();
      },

    },

  render: function() {
    return this.$el.html(this.template());
  }
});
