function favoriteSongs(playlist) {
  const LIMIT = 2;
  let toplist = [];

  for (let i = 0; i < playlist.length; i++) {
    const song = playlist[i];
    let inserted = false;

    // Find correct position to insert
    for (let j = 0; j < toplist.length; j++) {
      if (song.plays > toplist[j].plays) {
        toplist.splice(j, 0, song);
        inserted = true;
        break;
      }
    }

    // If not inserted, add to end
    if (!inserted) {
      toplist.push(song);
    }

    // Keep only top LIMIT songs
    if (toplist.length > LIMIT) {
      toplist = toplist.slice(0, LIMIT);
    }
  }

  return toplist.map((song) => song.title);
}
