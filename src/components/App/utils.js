export const canBeNominated = (movie, nominees) => {
  // not already nominated
  const isAlreadyNominated = nominees.some(
    (nominee) => nominee.movie.imdbID === movie.imdbID
  );
  if (isAlreadyNominated) {
    return false;
  }

  // less than 5 movies already nominated
  if (nominees.length < 5) {
    return true;
  }

  return false;
};
