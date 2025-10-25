/*
Challenge #29

Date: October 23, 2025
Name: Favorite Songs
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-23
*/

function favoriteSongs(playlist) {
  const LIMIT = 2; // Number of Top songs

  let toplist = [];
  for (let i = 0; i < playlist.length; i++) {
    const title = playlist[i].title;
    const plays = playlist[i].plays;
    let isAdded = false;

    for (let j = 0; j < toplist.length; j++) {
      if (plays > toplist[j].plays && !isAdded) {
        toplist.splice(j, 0, { title, plays });
        isAdded = true;
      }
    }
    if (!isAdded) {
      toplist.push({ title, plays });
    }
  }
  const topTitles = toplist.reduce(
    (acc, song) => {
      if (acc.count < LIMIT) {
        return { titles: [...acc.titles, song.title], count: acc.count + 1 };
      }
      return acc;
    },
    { titles: [], count: 0 }
  );

  return [...topTitles.titles];
}

console.log(
  favoriteSongs([
    { title: "Sync or Swim", plays: 3 },
    { title: "Byte Me", plays: 1 },
    { title: "Earbud Blues", plays: 2 },
  ])
);
