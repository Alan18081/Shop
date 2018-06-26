import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAIL,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAIL,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAIL,
  ADD_PHONE_TO_BASKET,
  SEARCH_PHONES,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  REMOVE_PHONE_FROM_BASKET,
  CLEAN_BASKET
} from './types';

import {getRenderedPhonesLength} from '../selectors';

import {
  fetchPhonesApi,
  loadMorePhonesApi,
  fetchPhoneByIdApi,
  fetchCategoriesApi
} from '../api';

export const fetchPhones = () => {
  return async dispatch => {
    dispatch({type: FETCH_PHONES_START});
    try {
      const phones = await fetchPhonesApi();
      dispatch({type: FETCH_PHONES_SUCCESS, payload: phones});
    }
    catch(err) {
      dispatch({type: FETCH_PHONES_FAIL,payload: err,error: true});
    }
  }
};

export const fetchCategories = () => {
  return async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});
    try {
      const categories = await fetchCategoriesApi();
      dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: categories});
    }
    catch(err) {
      dispatch({type: FETCH_CATEGORIES_FAIL,payload: err,error: true});
    }
  }
};

export const loadMorePhones = () => {
  return async (dispatch,getState) => {
    const offset = getRenderedPhonesLength(getState());
    dispatch({type: LOAD_MORE_PHONES_START});
    try {
      const phones = await loadMorePhonesApi({offset});
      dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones});
    }
    catch(err) {
      dispatch({type: LOAD_MORE_PHONES_FAIL,payload: err,error: true});
    }
  }
};

export const fetchPhoneById = id => {
  return async dispatch => {
    dispatch({type: FETCH_PHONE_BY_ID_START});
    try {
      const phone = await fetchPhoneByIdApi(id);
      dispatch({type: FETCH_PHONE_BY_ID_SUCCESS, payload: phone});
    }
    catch(error) {
      dispatch({type: FETCH_PHONE_BY_ID_FAIL, payload: error,error: true});
    }
  }
};

export const addPhoneToBasket = id => {
  return dispatch => {
    dispatch({type: ADD_PHONE_TO_BASKET, payload: id});
  }
};
export const searchPhones = text => {
  return dispatch => {
    dispatch({type: SEARCH_PHONES,payload: text});
  }
};

export const removePhoneFromBasket = (id) => {
  return dispatch => {
    dispatch({type: REMOVE_PHONE_FROM_BASKET,payload: id});
  }
};

export const cleanBasket = () => {
  return dispatch => {
    dispatch({type: CLEAN_BASKET});
  }
};

export const basketCheckout = phones => {
  alert(JSON.stringify(phones));
};