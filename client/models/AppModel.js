// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    //extending a model to acess new collections/models
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    //event listeners
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      console.log('Appmodel enqueue function triggered. library (collection):',this);
      this.get('songQueue').add(song);
    }, this);

    this.get('songQueue').on('dequeue', function(song) {
      console.log('Appmodel dequeue function triggered. SongQueue (collection):',this.get('songQueue'), 'song:',song);
      song.attributes.current = false;

      //remove
      var deqPos = _.indexOf(this.get('songQueue').models, song);
      console.log('position in song queue:', deqPos);
      if(deqPos < this.get('songQueue').songNumber) { this.get('songQueue').songNumber--; }

      this.get('songQueue').remove(song);
    }, this);

      this.get('songQueue').on('quickPlay', function(song) {
        this.get('songQueue').currentSong.attributes.current = false;
        this.get('songQueue').currentSong = song;
        this.get('songQueue').songNumber = _.indexOf(this.get('songQueue').models, song);
        song.attributes.current = true;
        this.get('songQueue').refresh();
        this.set('currentSong',song);
      },this);

    this.get('songQueue').on('ended', function() {
      this.set('currentSong','');
    },this);

  },


});
