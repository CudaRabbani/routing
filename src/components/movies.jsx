import React, {Component, Fragment} from 'react';
import {getMovies} from "../data/fakeMovieService";
import Like from "./like";

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m =>movie._id !== m._id);
        this.setState({
            movies: movies
        })
    };

    handleLike = (movie) => {
        let movies = this.state.movies;
        const index = movies.indexOf(movie);
        //movies[index].liked = !movies[index].liked; //we chould not do it
        movies[index] = {...movies[index]}; //object clonning
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    render() {
        if (this.state.movies.length !== 0) {
            return (
                <Fragment>
                    <p>Showing {this.state.movies.length} many movies</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like
                                    movie={movie}
                                    onLike={this.handleLike}
                                />
                                </td>
                                <td>
                                    <button onClick={ () => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Fragment>
            )
        }
        else {
            return (
                <p>There is no movies</p>
            )
        }
    }
}

export default Movies;