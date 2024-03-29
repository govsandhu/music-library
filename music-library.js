class Library {
  constructor (name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
  }
  addPlaylists(playlist) {
    this.playlists.push(playlist)
  }
}

class Playlist {
  constructor (name) {
    this.name = name
    this.tracks = []
  }

  addTracks(track) {
    this.tracks.push(track);
  }
  
  overallRating() {
    let ratingsTotal = 0;
    let ratingsLength = this.tracks.length;
    
    for(let i = 0; i < ratingsLength; i++) {
      ratingsTotal += this.tracks[i].rating;
    }
    let avgRating = ratingsTotal/ratingsLength
  return `The overall rating is: ${avgRating}`;
  }

  totalDuration() {
    let durationTotalInSeconds = 0;
    let durationLength = this.tracks.length;
    
    for(let i = 0; i < durationLength; i++) {
      durationTotalInSeconds += this.tracks[i].lengthInSeconds
    }
    let durationInMinutes = Math.floor(durationTotalInSeconds / 60)
    return `The duration is ${durationInMinutes} minutes`;
  }
}

class Track {
  constructor(title, rating, lengthInSeconds) {
    this.title = title
    this.rating = rating
    this.lengthInSeconds = lengthInSeconds
  }
}

let lib = new Library('Cool songs', 'Govind');
// console.log(lib);

let playlist1 = new Playlist('My songs')
// console.log(playlist1)

let track1 = new Track('Song', 4, 120);
// console.log(track1)

let track2 = new Track('song2', 3, 240);


playlist1.addTracks(track1);
console.log("Added track to playlist:", playlist1)

playlist1.addTracks(track2);
console.log("Added second track to playlist:", playlist1)

lib.addPlaylists(playlist1);
console.log("Added playlist to library", lib)

console.log(playlist1.overallRating());

console.log(playlist1.totalDuration());










