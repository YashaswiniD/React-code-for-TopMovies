import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <ul className="list-unstyled">
          <li className="list-group-item">
            <div className="d-flex media row">
              <img
                className="mr-3 col-1 d-none d-lg-block d-xl-block"
                src={movie.poster_url}
                alt={""}
              />

              <div className="media-body m-2">
                <b> {movie.movieName}</b>
                <div>Genre:{movie.genre}</div>
                <div>IMDB:{movie.imdb_rating}</div>
                <div>Rotten Tomatoes:{movie.rotten_tomatoes_rating}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MovieItem;
