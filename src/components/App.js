import React, { useState, useEffect } from "react";
import "../App.css";
import Movie from "./Movie";
import Search from "./Search";

const APIKey = "3b047afd";






// var JSON = '{"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"USA, UK","Awards":"Won 1 Oscar. Another 7 wins & 26 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.5","imdbVotes":"337,623","imdbID":"tt0096895","Type":"movie","DVD":"N/A","BoxOffice":"$251,348,343","Production":"Warner Brothers, PolyGram Filmed Entertainment, Guber-Peters Company","Website":"N/A","Response":"True"}';
// var batman = JSON.parse(JSON); 
var batman = "batman";
const arr = [{batman}];

const movieList = arr.map((val) => (<li><Movie movie={val} /></li>));


const App = () => {
    // const movieTitle = "batman";
    // const movieYear = "1999";

   // const movie = (<p>{movieTitle} ({movieYear}) <button>Nominate</button></p>);

   

  return (
    <div className="App">




    
        <div className="Results">
            <h1>Results</h1>
            <ul>
                {movieList}
{/* 
                <li>
                {movie}
                </li> */}

            </ul>
            
        </div>

    </div>


    
  );
};





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
