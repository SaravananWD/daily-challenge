function imageSearch(images, term) {
  const outputArray = [];
  const searchTerm = term.toLowerCase();

  for (const image of images) {
    if (image.toLowerCase().includes(searchTerm)) {
      outputArray.push(image);
    }
  }

  return outputArray;
}
