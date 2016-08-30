import IndustryApi from '../api/mockIndustryApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadIndustriesSuccess(industries) {
  return {type: types.LOAD_INDUSTRIES_SUCCESS, industries};
}

export function loadIndustries() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return IndustryApi.getAllIndustries().then(industries => {
      dispatch(loadIndustriesSuccess(industries));
    }).catch(error => {
      throw(error);
    });
  };
}
