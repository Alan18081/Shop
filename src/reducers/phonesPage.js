import * as R from 'ramda';
import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONES
} from '../actions/types';

const initialState = {
  ids: [],
  search: ''
};

const fetchPhonesSuccess = (state,payload) => {
  return R.merge(state,{
    ids: R.pluck('id',payload)
  });
};

const loadMorePhonesSuccess = (state,payload) => {
  const ids = R.pluck('id',payload);
  return R.merge(state,{
    ids: R.concat(state.ids,ids)
  })
};

const searchPhones = (state,payload) => {
  return R.merge(state,{
    search: payload
  });
};

export default (state = initialState,{type,payload}) => {
  switch(type) {
    case FETCH_PHONES_SUCCESS:
      return fetchPhonesSuccess(state,payload);
    case LOAD_MORE_PHONES_SUCCESS:
      return loadMorePhonesSuccess(state,payload);
    case SEARCH_PHONES:
      return searchPhones(state,payload);
    default:
      return state;
  }
};

