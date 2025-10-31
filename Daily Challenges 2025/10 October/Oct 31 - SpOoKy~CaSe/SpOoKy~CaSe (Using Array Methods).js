function spookify(boo) {
  return boo
    .replace(/[_-]/g, "~")
    .split("")
    .reduce((acc, char, index, arr) => {
      if (char === "~") return acc + "~";

      const letterIndex = arr.slice(0, index).filter((c) => c !== "~").length;
      return (
        acc + (letterIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      );
    }, "");
}
