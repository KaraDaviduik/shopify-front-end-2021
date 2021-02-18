import { NominatedMovie } from "./components/NominatedMovie/NominatedMovie";

export function NominationList({ nominees, removeNomination }) {
  const listItems = nominees.map((val) => (
    <li key={val.movie.imdbID}>
      <NominatedMovie movie={val.movie} removeNomination={removeNomination} />
    </li>
  ));

  return <ul>{listItems}</ul>;
}
