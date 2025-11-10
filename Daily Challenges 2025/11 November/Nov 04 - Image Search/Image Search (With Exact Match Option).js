function imageSearch(images, term, exactMatch = false) {
  const searchTerm = term.toLowerCase();

  return images.filter((image) => {
    const imageName = image.toLowerCase();
    return exactMatch
      ? imageName === searchTerm || imageName.includes("." + searchTerm + ".")
      : imageName.includes(searchTerm);
  });
}
