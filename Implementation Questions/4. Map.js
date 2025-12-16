const mapObj = new Map();

const user = { name: "John", detail: "Developer" };

mapObj.set(user, "Example Value");

console.log(mapObj);
// Map(1) {size: 1, {name: 'John', …} => Example Value}

console.log(mapObj.get(user));
// Example Value

console.log(mapObj.has(user));
// true

console.log(mapObj.size);
// 1
