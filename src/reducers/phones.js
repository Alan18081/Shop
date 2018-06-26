import * as R from 'ramda';

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS
} from '../actions/types';

const initialState = {};

const fetchPhonesSuccess = (state,payload) => {
  const newPhones = R.indexBy(R.prop('id'),payload);
  return R.merge(state,newPhones);
};

const loadMorePhonesSuccess = (state,payload) => {
  const newPhones = R.indexBy(R.prop('id'),payload);
  return R.merge(state,newPhones);
};

const fetchPhoneByIdSuccess = (state,payload) => {
  return R.assoc(payload.id,payload,state);
};

export default (state = initialState,{type,payload,error}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return fetchPhonesSuccess(state,payload);
    case LOAD_MORE_PHONES_SUCCESS:
      return loadMorePhonesSuccess(state,payload);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return fetchPhoneByIdSuccess(state,payload);
    default:
      return state;
  }
}