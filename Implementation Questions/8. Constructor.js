// using es6 class constructor
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const john = new User("John");
john.greet();

// using old protoype inheritance
function UserAlt(name) {
  this.name = name;
}

UserAlt.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const jason = new UserAlt("Jason");
jason.greet();
