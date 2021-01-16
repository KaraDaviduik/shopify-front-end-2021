import React, { useState } from "react";
import ReactDOM from 'react-dom';



const Movie = ({ movie }) => {
    return (
        <div className="Movie">
            <p>{movie.Title} ({movie.Year}) <button>Nominate</button></p>
        </div>
    )



}
export default Movie;

// function Nominate() {
//   const [nominated, setNominate] = useState(false);
// }


// class Movie extends React.component {
//   state = {
//     title: {movie.Title},
//     year: {movie.Year},
//     nominated: false
//   }

//   nominate = () => {

//     // need if statements
//     this.setState({
//       title: {movie.Title},
//       year: {movie.Year},
//       nominated: true
//     })
//   }

//   render() {
//     return <div className="movie">

//     <button onClick={this.nominate}>Nominate</button>
//   </div>


//     </div>

//     <h1>Hello World</h1>;
//   }
// }