import React, { useState } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList/MovieList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [APIQuery, setAPIQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nominees, setNominees] = useState([]);

  function updateSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  const removeNomination = ({ movie }) => {
    setNominees(
      nominees.filter(
        (nominee) => nominee.movie.imdbID !== { movie }.movie.imdbID
      )
    );
    movie.Nominated = false;
  };

  const NominatedMovie = ({ movie }) => {
    return (
      <div className="Movie">
        <p>
          {movie.Title} ({movie.Year}){" "}
          <button onClick={() => removeNomination({ movie })}>Remove</button>
        </p>
      </div>
    );
  };

  function NominationList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) => (
      <li key={JSON.stringify(val.movie.imdbID)}>
        <NominatedMovie movie={val.movie} />
      </li>
    ));

    return <ul>{listItems}</ul>;
  }

  const DisplayBanner = () => {
    if (nominees.length >= 5) {
      return (
        <div class="banner">
          <div class="banner-content">
            <h1>Movie nomination complete!</h1>
          </div>
        </div>
      );
    }
    return <div class="empty"></div>;
  };

  const clearInput = () => {
    setSearchQuery("");
  };
  const callSearch = (e) => {
    e.preventDefault();
    search(searchQuery);
    setAPIQuery(searchQuery);
    clearInput();
  };

  const search = (searchQuery) => {
    setMovieResults([]);
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3b047afd`)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "True") {
          setMovieResults(response.Search);
          setLoading(false);
        } else {
          setError(response.Error);
          setLoading(false);
        }
      });
  };

  const nominateMovie = (movie) => {
    // nominate movie
    console.log("nominate movie", movie);

    setNominees((nominees) => nominees.concat({ movie }));
    movie.Nominated = true;
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>The Shoppies</h1>
      <div class="row">
        <div class="column">
          <h2>Search Movie Titles</h2>
          <form onSubmit={callSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={updateSearchQuery}
            />
            <input type="submit" />
          </form>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <h2>Results for "{APIQuery}"</h2>
          {loading && <p>Loading...</p>}
          {error != null && <p>Error: {error}</p>}

          <MovieList
            movieResults={movieResults}
            nominees={nominees}
            onNominate={nominateMovie}
          />
        </div>

        <div class="column">
          <h2>Nominations</h2>
          <NominationList data={nominees} />
          <DisplayBanner />
        </div>
      </div>
    </div>
  );
};

export default App;
