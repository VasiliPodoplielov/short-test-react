import {combineReducers} from "redux";
import QuestionReducers from './questions';

const allReducers = combineReducers({
   questions:  QuestionReducers
});

export default allReducers;