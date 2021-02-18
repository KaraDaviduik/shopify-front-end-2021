import { Movie } from "./components/Movie/Movie";

export function MovieList({ movieResults, nominees, onNominate }) {
  const listItems = movieResults.map((movieResult) => (
    <li key={movieResult.imdbID}>
      <Movie movie={movieResult} nominees={nominees} onNominate={onNominate} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
