//ControlsView.js

var ControlsView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
  },

  events: {
    'click .prev': function() {
      // this.model.play();
      this.collection.playNext();
      console.log('LibraryEntryView.click. This model.enqueue called, model:', this.collection.playPrev);
      },

    'click .next': function() {
      // this.model.play();
      this.collection.playPrev();
      console.log('LibraryEntryView.click. This model.enqueue called, model:', this.collection.playNext);
      },

    },

  render: function() {
     //this.$el.children().detach();
     // console.log('ControlsViewRendering. this:',this);
     // this.collection = new ControlsEntryView({collection: SongQueue}).render();
     // this.$el.html().append(this.collection);

    // this.$el.children().detach();

    this.$el.html('<button class="prev">previous</button><button class="next">next</button>').append();
  }


});
