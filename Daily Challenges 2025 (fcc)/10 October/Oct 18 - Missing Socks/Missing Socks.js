/*
Challenge #24

Date: October 18, 2025
Name: Missing Socks
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-18
*/

function sockPairs(pairs, cycles) {
  const cycleLimits = {
    lose: 2,
    find: 3,
    throw: 5,
    buy: 10,
  };

  const socksRecord = {
    totalLost: Math.floor(cycles / cycleLimits.lose),
    totalFound: Math.floor(cycles / cycleLimits.find),
    totalWornOut: Math.floor(cycles / cycleLimits.throw),
    totalBought: Math.floor(cycles / cycleLimits.buy),
  };

  const numberOfInitialSocks = pairs * 2;

  const remainingPairs = Math.floor(
    (numberOfInitialSocks -
      socksRecord.totalLost -
      socksRecord.totalWornOut +
      socksRecord.totalFound +
      socksRecord.totalBought * 2) /
      2
  );

  return remainingPairs < 0 ? 0 : remainingPairs;
}

console.log(sockPairs(6, 25));
