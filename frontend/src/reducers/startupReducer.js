import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function startupReducer(state = initialState.startups, action) {
  switch (action.type) {
    case types.LOAD_STARTUPS_SUCCESS:
      return action.startups;

    case types.CREATE_STARTUP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.startup)
      ];

    case types.UPDATE_STARTUP_SUCCESS:
      return [
        ...state.filter(startup => startup.id !== action.startup.id),
        Object.assign({}, action.startup)
      ];
      
    default:
      return state;

  }
}
