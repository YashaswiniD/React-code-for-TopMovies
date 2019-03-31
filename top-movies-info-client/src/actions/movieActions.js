import axios from "axios";
import { GET_MOVIES } from "./types";

export const getMovies = (ev, year) => async dispatch => {
  const res = await axios.get("/api/topmovies/" + year);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};
