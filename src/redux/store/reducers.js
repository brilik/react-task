import { combineReducers } from 'redux';
import movieReducer from "../movie/reducer";

const rootReducers = combineReducers({
    movie: movieReducer,
}); 

export default rootReducers;