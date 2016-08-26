import * as types from './actionTypes';

export function createStartup(startup) {
  return {type: types.CREATE_STARTUP, startup};
  //in ES5 we would write "startup: startup", but since the left hand matches
  //the right it's no longer necessary in ES6
}
