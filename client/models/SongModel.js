// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0,
    current : false
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('SongModel.enqueue called. enqueue trigger generated. SongModel:',this);
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue',this);
    this.trigger('ended');
  },

  ended: function() {
    this.trigger('ended',this);
  },

  quickPlay: function() {
    this.trigger('quickPlay',this);
  }

});
