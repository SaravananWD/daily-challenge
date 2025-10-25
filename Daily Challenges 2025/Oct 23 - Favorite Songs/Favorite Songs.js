function favoriteSongs(playlist) {
  const LIMIT = 2; // Number of Top songs

  const checkMaxim = (title, plays) => {
    // ("Earbud Blues", 2)
    let isAdded = false;
    for (let i = 0; i < toplist.length; i++) {
      // 0 < 2 true, 1 < 2 true
      if (plays > toplist[i].plays && !isAdded) {
        // 2 > 3 false, 2 > 1 true
        toplist[i] = { title, plays }; // {"Earbud Blues", 2}
        isAdded = true;
      }
    }
  };

  const addMaxim = (title, plays) => {
    // ("Sync or Swim", 1), ("Byte Me", 2)
    let isAdded = false;
    for (let i = 0; i < LIMIT && !isAdded; i++) {
      // 0 < 2, 0 < 2, 1 < 2
      if (!toplist[i] && !isAdded) {
        // true, false, true
        toplist.push({ title, plays }); // {title: "Sync or Swim", plays: 1}
        isAdded = true;
      } else if (!isAdded) {
        // true
        if (toplist[i].plays < plays) {
          // 1 < 2 true
          toplist.unshift({ title, plays });
          isAdded = true;
        }
      }
    }
  };

  let toplist = [];
  for (let i = 0; i < playlist.length; i++) {
    // 0, 1, 3
    const title = playlist[i].title; // "Sync or Swim", "Byte Me", "Earbud Blues"
    const plays = playlist[i].plays; // 1, 2, 3

    if (toplist.length === LIMIT) {
      // 0 === 2 false, 1 === 2 false, 2 === 2 true
      checkMaxim(title, plays); // ("Earbud Blues", 2)
    } else {
      addMaxim(title, plays); // ("Sync or Swim", 1), ("Byte Me", 2)
    }
  }

  return [toplist[0].title, toplist[1].title];
}

console.log(
  favoriteSongs([
    { title: "Sync or Swim", plays: 1 },
    { title: "Byte Me", plays: 2 },
    { title: "Earbud Blues", plays: 3 },
  ])
);

/*



Favorite Songs
Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, 
return an array with the titles of the two most played songs, with the most played song first.

Each object will have a "title" property (string), and a "plays" property (integer).
*/
