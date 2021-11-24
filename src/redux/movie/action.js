import { GET_ALL_MOVIE_ERROR, GET_ALL_MOVIE_SUCCESS, GET_MOVIE_ERROR, GET_MOVIE_SUCCESS } from "./actionTypes";

export const getAllMovieSucces = (data) => {
    return {
      type: GET_ALL_MOVIE_SUCCESS,
      payload: data
    }
};

export const getAllMovieError = (error) => {
    return {
      type: GET_ALL_MOVIE_ERROR,
      payload: error
    }
};

export const getMovieSucces = (data) => {
    return {
      type: GET_MOVIE_SUCCESS,
      payload: data
    }
};

export const getMovieError = (error) => {
    return {
      type: GET_MOVIE_ERROR,
      payload: error
    }
};



