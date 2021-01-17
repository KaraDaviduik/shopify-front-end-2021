import React, { useState, useEffect } from "react";
import "../App.css";
// import Movie from "./Movie";
// import Search from "./Search";

const APIKey = "3b047afd";




// const movieList = arr.map((val) => (<li><Movie movie={val} /></li>));







// array nominations list, array of {movie}s
// display nominations list
// button onClick calls nominate function
// nominate: checks if movie is already in array, if not then display it










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

    const RemoveNomination = ({movie}) => {
        // window.alert(JSON.stringify(nominees[0].movie.Title));
        // window.alert(JSON.stringify({movie}.movie.Title));
        // window.alert(JSON.stringify(nominees.filter((nominee) => nominee.movie.Title === {movie}.movie.Title)));
        setNominees(nominees.filter((nominee) => nominee.movie.Title !== {movie}.movie.Title));
        movie.Nominated = "false";

    }

    const NominateMovie = ({movie}) => {
        // window.alert(`nominate: ${movie}`);
        setNominees(nominees => nominees.concat({movie}));
    }

    const CheckIfNominated = ({movie}) => {
        // value={searchQuery} onChange={updateSearchQuery}
        if (({movie}.movie.Nominated) === "false") {
            
            movie.Nominated = "true";
            // window.alert(JSON.stringify({movie}.movie));
            NominateMovie({movie});
            // <NominateMovie movie={movie} />
            // NominateMovie({movie});
        }
        else {
            // window.alert(JSON.stringify({movie}.movie));
        }
        console.log({movie});
        // <NominateMovie movie={movie} />


    }

    const Movie = ({ movie }) => {
        //  window.alert(JSON.stringify(Object.keys({movie}.movie)));
        if (({movie}.movie).hasOwnProperty("Nominated")) {
            // window.alert(`FOUND: ${JSON.stringify({movie})}`);
            // if ({movie}.movie.Nominated) {
            // }
        }
        else {
            movie.Nominated="false";
        }
        
        return (
            // <li></li>
            <div className="Movie">
                <p>{movie.Title} ({movie.Year}) <button onClick={() => CheckIfNominated({movie})}>Nominate</button></p>
            </div>
            // movieResults.movie = 'false';
        )
    }

    const NominatedMovie = ({movie}) => {
        return (
            <div className="Movie">
                <p>{movie.Title} ({movie.Year}) <button onClick={() => RemoveNomination({movie})}>Remove</button></p>
            </div>
        )
    }


    function NominationList(props) {
        // window.alert(JSON.stringify({nominees}));
        const arr = props.data;
        // window.alert(`LIST: ${props}`);
        const listItems = arr.map((val, index) =>
        <li key={JSON.stringify(val.movie.Title)}><NominatedMovie movie={val.movie} /></li>
        );
        
        return <ul>{listItems}</ul>;
    }
    function MyList(props) {
        const arr = props.data;
        const listItems = arr.map((val, index) =>
            <li key={JSON.stringify(val.Title)}><Movie movie={val} /></li>
        );
        return <ul>{listItems}</ul>;
    }


    // }
    // useEffect(() => {
    //     // setLoading(true);
    //     // setMovieResults([]);
    //     // window.alert("TEST");
    //     fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${APIKey}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // window.alert("TEST");
    //             setMovieResults(data.Search);

    //             window.alert({movieResults});

    //             // console.log(movieResults);
    //         })
    //     // setLoading(false);

    // }, [searchQuery]);

    const clearInput = () => {
        setSearchQuery("");

    }
    const callSearch = (e) => {
        // window.alert("callSearch");
        e.preventDefault();
        search(searchQuery);
        setAPIQuery(searchQuery);
        clearInput();

    }

    const search = searchQuery => {
        // window.alert("Searching");
        setMovieResults([]);
        setLoading(true);
        setError(null);
        fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=3b047afd`)
            .then(resp => resp.json())
            .then(response => {
                // window.alert(`Response: ${response}`);
                if (response.Response === "True") {
                    // window.alert(`API: ${searchQuery}, response: ${response.Search}`);
                    // window.alert("TEST");
                    setMovieResults(response.Search);
                    // var x = JSON.stringify(movieResults);
                    // var x = JSON.stringify(movieResults[1].Title);

                    // window.alert(`Result: ${x}`);
                    setLoading(false);
                } else {
                    // window.alert("ERROR");
                    setError(response.Error);
                    setLoading(false);
                }

                // window.alert({movieResults});
                // var json = JSON.parse(movieResults);
                // window.alert(JSON.stringify(json));

                // console.log(movieResults);
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
                                {/* <button type="submit" >
                                    <i class="fa fa-search"></i>
                                </button> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <h2>Results for "{APIQuery}"</h2>

                    <MyList data={movieResults} />

                </div>


                <div class="column">
                    <h2>Nominations</h2>
                    <NominationList data={nominees} />

                </div>

            </div>

        </div>


    );
};





export default App;
