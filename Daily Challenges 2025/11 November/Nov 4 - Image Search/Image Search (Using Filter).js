function imageSearch(images, term) {
  return images.filter((image) =>
    image.toLowerCase().includes(term.toLowerCase())
  );
}

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
