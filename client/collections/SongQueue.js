// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // defaults: {
  //   songNumber: 0
  // },

  initialize: function(){
    //this.on('add', this.enqueue, this);
    this.listenTo(this, 'add', this.enqueue);
    this.listenTo(this, 'remove', this.dequeue);
    this.listenTo(this, 'playNext', this.playNext);
    this.listenTo(this, 'playPrev', this.playPrev);
    this.listenTo(this, 'ended', this.playNext);
    // this.listenTo(this, 'quickPlay', this.playSelected);
  },

  songNumber: 0,

  enqueue: function() {
    console.log('SongQueue.enqueue called. SongQueue:',this);
    console.log('SongNumber:',this.songNumber);

    if(this.length === 1) {
      console.log('Fresh playlist!');
      //++this.at(this.songNumber).attributes.playCount;
      this.at(this.songNumber).attributes.current = true;
      //trigger
      this.at(this.songNumber).play();                              //length property available
      this.currentSong = this.at(this.songNumber);
    }
  },

  dequeue: function(song) {
    console.log('songQueue:',this);
    console.log('song', song);
    if(this.length === 0) {
      this.refresh();
      this.trigger('ended',this)
      return;
    }
    //if(this.songNumber) { this.songNumber--; }
    //this.at(this.songNumber).play();

    if(song === this.currentSong) {
      this.at(this.songNumber).attributes.current = true;
      this.currentSong = this.at(this.songNumber);
      this.at(this.songNumber).play();
    }
    //else if(_.indexOf(this, song) < this.songNumber) { this.songNumber--; }

    //console.log('models:',this.models);
  },

  playNext: function() {
    console.log('playNext method triggered!');
    if(this.songNumber < this.length-1) {
      this.at(this.songNumber).attributes.current = false;
      this.songNumber++;
      this.at(this.songNumber).attributes.current = true;
      //trigger
      this.at(this.songNumber).play();
      this.currentSong = this.at(this.songNumber);
      ++this.at(this.songNumber).attributes.playCount;
      this.trigger('songChanged',this);
    }
  },

  playPrev: function() {
    if(this.songNumber > 0) {
      this.at(this.songNumber).attributes.current = false;
      this.songNumber--;
      this.at(this.songNumber).attributes.current = true;
      //trigger
      this.at(this.songNumber).play();
      this.currentSong = this.at(this.songNumber);
      ++this.at(this.songNumber).attributes.playCount;
      this.trigger('songChanged',this);
    }
  },

  refresh: function() {
      this.trigger('songChanged',this);
  },

  currentSong : null,

  // function() {
  //   return this.defaults[songCount];
  // }

});
