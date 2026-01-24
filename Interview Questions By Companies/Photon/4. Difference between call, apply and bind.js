const person = {
  name: "Alex",
};

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

greet("Mumbai");

greet.call(person, "Seoul");
greet.apply(person, ["Moscow"]);
const boundGreet = greet.bind(person, "Taiwan");
boundGreet();
