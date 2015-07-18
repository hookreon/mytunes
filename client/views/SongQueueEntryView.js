// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: '<tr>',

  template: _.template('<td class="clickToPlay">(<%= artist %>)</td><td class="clickToPlay"><%= title %></td><td><button class="remove">x</button></td>'),

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
      output.css('color', 'blue');
    }
    return output;
  }
});
