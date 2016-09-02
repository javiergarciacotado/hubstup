import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function industryReducer(state = initialState.industries, action) {
  switch (action.type) {
    case types.LOAD_INDUSTRIES_SUCCESS:
      return action.industries;
    default:
      return state;
  }
}
