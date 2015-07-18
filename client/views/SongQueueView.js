// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', this.render, this);
    this.collection.on('songChanged', function() {
      console.log('SongQueueView says: Song changed!!');
    }, this);
  },

  render: function() {
    //detach children
    this.$el.children().detach();

    //reappend the children to the view
    this.$el.html('<th>Play List</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

