// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',

  template: _.template('<div><h3 class="clickToPlay">  <%= title %>  </h3>  <h3 class="clickToPlay artistClass"> <%= artist %> </h3><button class="remove waves-effect waves-light btn">  x  </button>  </div>'),

  initialize: function() {
  },

  events: {
    'click .remove': function() {
       console.log('SongQueueEntryView says: Dequeue trigger generated');
       this.model.dequeue();
    },
    'click .clickToPlay': function() {
       console.log('SongQueue Click to Play says: Clicked to play');
       this.model.quickPlay();
    }
  },

  render: function(currSong) {
    var output = this.$el.html(this.template(this.model.attributes));
    if(currSong) {
      output.addClass('colorSong');
    }
    return output;
  }
});
