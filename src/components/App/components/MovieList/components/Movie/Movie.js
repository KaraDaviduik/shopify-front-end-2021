import { canBeNominated } from "../../../../utils";

export const Movie = ({ movie, nominees, onNominate }) => {
  const nominateMovie = () => onNominate(movie);

  return (
    <div className="Movie">
      <p>
        {movie.Title} ({movie.Year}){" "}
        <button
          disabled={!canBeNominated(movie, nominees)}
          onClick={nominateMovie}
        >
          Nominate
        </button>
      </p>
    </div>
  );
};
