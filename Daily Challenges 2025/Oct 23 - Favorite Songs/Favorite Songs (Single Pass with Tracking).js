function favoriteSongs(playlist) {
  let first = { plays: -1, title: "" };
  let second = { plays: -1, title: "" };

  for (const song of playlist) {
    if (song.plays > first.plays) {
      second = { ...first };
      first = song;
    } else if (song.plays > second.plays) {
      second = song;
    }
  }

  return [first.title, second.title].filter((title) => title !== "");
}
