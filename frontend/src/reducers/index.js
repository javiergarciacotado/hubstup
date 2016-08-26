import {combineReducers} from 'redux';
import startups from './startupReducer';

const rootReducer = combineReducers({
  startups //ES6 short-name property name. In ES5 = startups: startups
});

export default rootReducer;
