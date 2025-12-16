/*
Challenge #69

Date: November 22, 2025
Name: Recipe Scaler
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-22
*/

function scaleRecipe(ingredients, scale) {
  return ingredients.map((recipe) => {
    const scaledVal = recipe.split(" ");
    return [scaledVal[0] * scale, ...scaledVal.slice(1)].join(" ");
  });
}
console.log(scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2));
