import * as R from 'ramda';
import {FETCH_CATEGORIES_SUCCESS} from '../actions/types';

const initialState = {};

const fetchCategoriesSuccess = (state,payload) => {
  const categories = R.indexBy(R.prop('id'),payload);
  console.log(categories);
  return R.merge(state,categories);
};

export default (state = initialState,{type,payload}) => {
  switch(type) {
    case FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state,payload);
    default:
      return state;
  }
}