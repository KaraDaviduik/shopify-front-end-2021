export const NominatedMovie = ({ movie, removeNomination }) => {
  return (
    <div className="Movie">
      <p>
        {movie.Title} ({movie.Year}){" "}
        <button onClick={() => removeNomination({ movie })}>Remove</button>
      </p>
    </div>
  );
};
