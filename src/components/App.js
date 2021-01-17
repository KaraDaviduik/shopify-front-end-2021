import React, { useState, useEffect } from "react";
import "../App.css";
// import Movie from "./Movie";
// import Search from "./Search";

const APIKey = "3b047afd";






// var JSON = '{"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"USA, UK","Awards":"Won 1 Oscar. Another 7 wins & 26 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.5","imdbVotes":"337,623","imdbID":"tt0096895","Type":"movie","DVD":"N/A","BoxOffice":"$251,348,343","Production":"Warner Brothers, PolyGram Filmed Entertainment, Guber-Peters Company","Website":"N/A","Response":"True"}';
// var batman = JSON.parse(JSON); 
// var batman = "batman";
// const arr = [{ batman }];

const arr = ["batman", "spiderman", "test"];

// const movieList = arr.map((val) => (<li><Movie movie={val} /></li>));

const Movie = ({ movie }) => {
    return (
        <div className="Movie">
            <p>{movie.Title} ({movie.Year}) <button>Nominate</button></p>
        </div>
    )
}

function MyList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) =>
      <li key={index}><Movie movie={val}/></li>
    );
    return <ul>{listItems}</ul>;
  }




const App = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [APIQuery, setAPIQuery] = useState("");
    const [movieResults, setMovieResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);


    function updateSearchQuery(e) {
        setSearchQuery(e.target.value);
    }
    // const updateSearchQuery = (e) => {
    //     setSearchQuery(e.target.value);
    // }

    


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

        setLoading(true);
        setError(null);
        fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=3b047afd`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            // window.alert(`Response: ${response}`);
            if (response.Response === "True") {
                // window.alert(`API: ${searchQuery}, response: ${response.Search}`);
                // window.alert("TEST");
                setMovieResults(response.Search);
                // var x = JSON.stringify(movieResults);
                
                // window.alert(`Result: ${x}`);
                setLoading(false);
            } else {
                window.alert("ERROR");
                setError(response.Error);
                setLoading(false);
            }
            
            // window.alert({movieResults});
            // var json = JSON.parse(movieResults);
            // window.alert(JSON.stringify(json));

            // console.log(movieResults);
        })
    }

    // const movieTitle = "batman";
    // const movieYear = "1999";

    // const movie = (<p>{movieTitle} ({movieYear}) <button>Nominate</button></p>);



    return (
        <div className="App">
            <h1>The Shoppies</h1>
            <div class="row">
                <div class="column">
                    <h2>Search Movie Titles</h2>
                    <div class="wrap">
                        <div class="search">
                            <form onSubmit={callSearch}>
                                <input type="text" class="searchTerm" value={searchQuery} onChange={updateSearchQuery}/>
                                <input type="submit" class="searchButton" />
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
                    


                    {/* <ul>
                        movieResults.map((movie) => (
                            <li><Movie movie={movie} /></li>
                        ));

                        {/* movieResults.map((movie) => (
                        <li>{movie.Title} ({movie.Year}) <button>Nominate</button></li>)); */}
                    {/* </ul>  */}

                    {/* <p>Some text..</p> */}

                </div>


                <div class="column">
                    <h2>Nominations</h2>
                    <p>Some text..</p>
                </div>

            </div>

        </div>
        //         {/* <div className="Results">
        //             <h1>Results</h1>
        //             <ul>
        //                 {movieList}
        // { 
        //                 <li>
        //                 {movie}
        //                 </li> }

        //             </ul>

        //         </div> */

        //     </div>

    );
};





export default App;
