const str = "Sample";
let reversed = "";

const len = str.length;
for (let i = len - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);
