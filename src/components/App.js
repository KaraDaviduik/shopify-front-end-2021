import React, { useState } from "react";
import "../App.css";


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

    const DisplayBanner = () => {
        if (nominees.length >= 5) {
            return (
                <div class="banner">
                    <div class="banner-content">
                        <h1>
                            Movie nomination complete!
                        </h1>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="empty">
                </div>
            )
        }
    }

    const RemoveNomination = ({ movie }) => {
        setNominees(nominees.filter((nominee) => nominee.movie.imdbID !== { movie }.movie.imdbID));
        movie.Nominated = false;

    }

    const NominateMovie = ({ movie }) => {
        if (nominees.length < 5) {
            setNominees(nominees => nominees.concat({ movie }));
            movie.Nominated = true;
        }
    }

    const CheckIfNominated = ({ movie }) => {
        if (!({ movie }.movie.Nominated)) {
            NominateMovie({ movie });
        }
    }

    const DisableCheck = ({movie}) => {
        return (movie.Nominated || nominees.length>=5);
    }

    const Movie = ({ movie }) => {
        console.log(movie);
        if (!({ movie }.movie).hasOwnProperty("Nominated")) {
            movie.Nominated = false;

        }
        if(nominees.some((nominee) => nominee.movie.imdbID === { movie }.movie.imdbID)) {
            movie.Nominated=true;
        }

        return (
            <div className="Movie">
                <p>{movie.Title} ({movie.Year}) <button disabled={DisableCheck({movie})} onClick={() => CheckIfNominated({ movie })}>Nominate</button></p>
            </div>
        )
    }

    const NominatedMovie = ({ movie }) => {
        return (
            <div className="Movie">
                <p>{movie.Title} ({movie.Year}) <button onClick={() => RemoveNomination({ movie })}>Remove</button></p>
            </div>
        )
    }

    function NominationList(props) {
        const arr = props.data;
        const listItems = arr.map((val, index) =>
            <li key={JSON.stringify(val.movie.imdbID)}><NominatedMovie movie={val.movie} /></li>
        );

        return <ul>{listItems}</ul>;
    }
    function MyList(props) {
        const arr = props.data;
        const listItems = arr.map((val, index) =>
            <li key={JSON.stringify(val.imdbID)}><Movie movie={val} /></li>
        );
        return <ul>{listItems}</ul>;
    }

    const clearInput = () => {
        setSearchQuery("");

    }
    const callSearch = (e) => {
        e.preventDefault();
        search(searchQuery);
        setAPIQuery(searchQuery);
        clearInput();

    }

    const search = searchQuery => {
        setMovieResults([]);
        setLoading(true);
        setError(null);
        fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=3b047afd`)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === "True") {
                    setMovieResults(response.Search);
                    setLoading(false);
                } else {
                    setError(response.Error);
                    setLoading(false);
                }
            })
    }

    return (
        <div className="App">
            <h1>The Shoppies</h1>
            <div class="row">
                <div class="column">
                    <h2>Search Movie Titles</h2>
                    <div class="wrap">
                        <div class="search">
                            <form onSubmit={callSearch}>
                                <input type="text" value={searchQuery} onChange={updateSearchQuery} />
                                <input type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <h2>Results for "{APIQuery}"</h2>
                        {loading &&
                        <p>Loading...</p>
                        }
                        {(error != null) && 
                            <p>Error: {error}</p>
                        }

                    <MyList data={movieResults} />

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
