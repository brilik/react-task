import axios from "axios";
import { getAllMovieError, getAllMovieSucces, getMovieError, getMovieSucces } from './action';

export const GetAllMovies = () => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(async res => {
        let data = await res.data;
        console.log(data,'getallusers');
        dispatch(getAllMovieSucces(data))
      }).catch(errors => {
        dispatch(getAllMovieError(errors.response.data))
      })
};

export const GetMovie = (id,data,headers = {}) => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,data,{
        headers:headers,
      })
      .then(async res => {
        let data = await res.data;
        dispatch(getMovieSucces(data))
      }).catch(errors => {
        dispatch(getMovieError(errors.response.data))
      })
};