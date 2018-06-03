import {combineReducers} from 'redux';
import {robotReducer} from './reducer';

const rootReducer = combineReducers({
    searchingRobot: robotReducer
});

export default rootReducer;