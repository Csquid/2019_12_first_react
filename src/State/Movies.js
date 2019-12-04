import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./Movies.css";

class Movies extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        //다 받을때까지 대기
        //movies.data.data.movies
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies);
        this.setState({ movies, isLoading: false });
        /* data.data.movies = {data: {data :{movies}}} */
    }
    async componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        console.log("I'm Rendering");
        return (
            <section className="containal">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image} 
                            genres={movie.genres}
                        />
                        ))}
                    </div>  
                )} 
            </section>
        );
    }
}

export default Movies;

