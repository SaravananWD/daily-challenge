function favoriteSongs(playlist) {
  return playlist
    .reduce((topTwo, song) => {
      // Add song to array
      topTwo.push(song);
      // Sort and keep only top 2
      return topTwo.sort((a, b) => b.plays - a.plays).slice(0, 2);
    }, [])
    .map((song) => song.title);
}
