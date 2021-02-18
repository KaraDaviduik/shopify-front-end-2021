export const Movie = ({ movie, nominees, onNominate }) => {
  console.log(movie);
  if (!{ movie }.movie.hasOwnProperty("Nominated")) {
    movie.Nominated = false;
  }
  if (
    nominees.some((nominee) => nominee.movie.imdbID === { movie }.movie.imdbID)
  ) {
    movie.Nominated = true;
  }

  const tryToNominate = () => checkIfNominated({ movie, onNominate, nominees });

  return (
    <div className="Movie">
      <p>
        {movie.Title} ({movie.Year}){" "}
        <button
          disabled={checkButtonStatus({ movie, nominees })}
          onClick={tryToNominate}
        >
          Nominate
        </button>
      </p>
    </div>
  );
};

const checkButtonStatus = ({ movie, nominees }) => {
  return movie.Nominated || nominees.length >= 5;
};

const checkIfNominated = ({ movie, onNominate, nominees }) => {
  if (!{ movie }.movie.Nominated) {
    nominateMovie({ movie, onNominate, nominees });
  }
};

const nominateMovie = ({ movie, onNominate, nominees }) => {
  if (nominees.length < 5) {
    // setNominees(nominees => nominees.concat({ movie }));
    // movie.Nominated = true;
    onNominate(movie);
  }
};
