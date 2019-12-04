import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const noString = "A horror-comedy slasher set in the 80's about a woman wrongfully fired from her office job and forced to take on a temporary job on a crime scene cleanup crew. With a maniacal serial killer on the loose leaving them lots of work, did he ever leave the scene of the crime?";
function Movie({
    id,
    year,
    title,
    summary,
    poster,
    genres
}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title"> {title} </h3>
                <h5 className="movie_year"> {year} </h5> 
                <ul className="movie_genres">
                  {
                    genres.map((genre, index) => 
                      <li key={index} className="genres_genre"> 
                        {genre}
                      </li>
                  )} 
                </ul>
                <p className="movie_summary"> {summary ? summary.slice(0, 400) : noString}... </p>

            </div>
        </div>

    );
}

// summary:
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
