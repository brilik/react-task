
import
    {
        GET_ALL_MOVIE_ERROR, GET_ALL_MOVIE_SUCCESS, GET_MOVIE_ERROR, GET_MOVIE_SUCCESS
    } from "./actionTypes";

const initialState = {
  movies: {},
  movie: {},
  errorMessages: {},
  isLoaded: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIE_SUCCESS:
      state = {
        ...state,
        movies: { ...action.payload },
        isLoaded: true,
      };
      break;
    case GET_ALL_MOVIE_ERROR:
      state = {
        ...state,
        isLoaded: true,
        errorMessages: { ...action.payload },
      };
      break;
    case GET_MOVIE_SUCCESS:
      state = {
        ...state,
        movie: { ...action.payload },
        isLoaded: true,
      };
      break;
    case GET_MOVIE_ERROR:
      state = {
        ...state,
        isLoaded: true,
        errorMessages: { ...action.payload },
      };
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
};

export default movieReducer;
