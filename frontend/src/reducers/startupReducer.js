import * as types from '../actions/actionTypes';

export default function startupReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_STARTUPS_SUCCESS:
      return action.startups;
    default:
      return state;

  }
}
