import * as R from 'ramda';
import {ADD_PHONE_TO_BASKET,REMOVE_PHONE_FROM_BASKET,CLEAN_BASKET} from '../actions/types';

const initialState = [];

const addPhoneToBasket = (state,payload) => {
  return R.append(payload,state);
};

const removePhoneFromBasket = (state,payload) => {
  return R.without(R.of(payload),state);
};

const cleanBasket = () => {
  return [];
};

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return addPhoneToBasket(state,payload);
    case REMOVE_PHONE_FROM_BASKET:
      return removePhoneFromBasket(state,payload);
    case CLEAN_BASKET:
      return cleanBasket();
    default:
      return state;
  }
}