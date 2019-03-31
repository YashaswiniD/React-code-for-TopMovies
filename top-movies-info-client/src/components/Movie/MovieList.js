import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movieActions";
import PropTypes from "prop-types";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.selectedYear
    };
  }

  componentDidMount() {
    this.props.getMovies(this, this.props.selectedYear);
    //console.log("entered MovieList", this.props.selectedYear);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectedYear !== state.year) {
      props.getMovies(this, props.selectedYear);
      return {
        year: props.selectedYear
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

  render() {
    const { movies } = this.props.movie;

    return (
      <div className="container">
        {movies.map(movie => (
          <MovieItem key={movie.imdbId} movie={movie} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieList);
