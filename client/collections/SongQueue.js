// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // defaults: {
  //   songNumber: 0
  // },

  initialize: function(){
    //this.on('add', this.enqueue, this);
    this.listenTo(this, 'add', this.enqueue);

  },

  songNumber: 0,

  enqueue: function() {
    console.log('SongQueue.enqueue called. SongQueue:',this);
    if(this.length === 1) {
      this.at(this.songNumber).play();                              //length property available
      //remove
      // this.songNumber++;
      // this.trigger('songChanged',this);
    }
  },

  playNext: function() {
    if(this.songNumber < this.length-1) {
      this.songNumber++;
      this.at(this.songNumber).play();
    }
  },

  playPrev: function() {
    if(this.songNumber > 0) {
      this.songNumber--;
      this.at(this.songNumber).play();
    }
  },


  // function() {
  //   return this.defaults[songCount];
  // }

});
