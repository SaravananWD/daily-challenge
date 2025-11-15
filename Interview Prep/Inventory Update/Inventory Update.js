/*
Challenge #62

Date: November 16, 2025
Name: Inventory Update
Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
*/

function updateInventory(arr1, arr2) {
  const newItems = [];

  for (let i = 0; i < arr2.length; i++) {
    let itemCount = arr2[i][0];
    const itemName = arr2[i][1];

    const existingItemIndex = arr1.findIndex((item) => item.includes(itemName));
    if (existingItemIndex >= 0) {
      arr1[existingItemIndex][0] += itemCount;
    } else {
      newItems.push([itemCount, itemName]);
    }
  }

  arr1 = [...arr1, ...newItems];

  arr1.sort((a, b) =>
    a[1].localeCompare(b[1], undefined, { sensitivity: "base" })
  );

  //   console.log("Output:");
  //   arr1.map((arr) => console.log(arr));

  return arr1;
}

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

// Should return:
// [
//   [88, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [3, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [5, "Microphone"],
//   [7, "Toothpaste"],
// ];
