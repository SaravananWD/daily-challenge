function favoriteSongs(playlist) {
  // Sort by plays in descending order and take first 2
  return playlist
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map((song) => song.title);
}
