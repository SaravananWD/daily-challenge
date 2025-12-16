const imageSearch = (images, term) =>
  images.filter((image) => image.toLowerCase().includes(term.toLowerCase()));
