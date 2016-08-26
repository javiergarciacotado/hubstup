import * as types from './actionTypes';
import startupApi from '../api/mockStartupApi';

export function loadStartupsSuccess(startups) {
  return {type: types.LOAD_STARTUPS_SUCCESS, startups};
  //in ES5 we would write "startup: startup", but since the left hand matches
  //the right it's no longer necessary in ES6
}

export function loadStartups(){
  return function (dispatch) {
    return startupApi.getAllStartups().then(startups => {
      dispatch(loadStartupsSuccess(startups));
    }).catch(error => {
      throw(error);
    });
  };
}
