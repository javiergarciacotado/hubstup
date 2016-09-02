import * as types from './actionTypes';
import startupApi from '../api/mockStartupApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadStartupsSuccess(startups) {
  return {type: types.LOAD_STARTUPS_SUCCESS, startups};
  //in ES5 we would write "startup: startup", but since the left hand matches
  //the right it's no longer necessary in ES6
}

export function createStartupSuccess(startup) {
  return {type: types.CREATE_STARTUP_SUCCESS, startup};
}

export function updateStartupSuccess(startup) {
  return {type: types.UPDATE_STARTUP_SUCCESS, startup};
}

export function loadStartups(){
  return function (dispatch) {
    //TO-DO consider including the beginAjaxCall within the API call
    dispatch(beginAjaxCall());
    return startupApi.getAllStartups().then(startups => {
      dispatch(loadStartupsSuccess(startups));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveStartup(startup) {
  return function (dispatch, getState) {
    //TO-DO consider including the beginAjaxCall within the API call
    dispatch(beginAjaxCall());
    return startupApi.saveStartup(startup).then(savedStartup => {
      startup.id ? dispatch(updateStartupSuccess(savedStartup)) :
        dispatch(createStartupSuccess(savedStartup));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
