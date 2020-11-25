import { Dispatch } from '@test/thunk';

import axiosService from '../utils/axiosService';

import {
  FETCHING_PHOTO,
  FETCHING_PHOTO_SUCCESS,
  FETCHING_PHOTO_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchPhoto = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_PHOTO });

    return axiosService
      .get(API_ENDPOINTS.photos.id(id))
      .then((res) => {
        dispatch({
          type: FETCHING_PHOTO_SUCCESS,
          payload: res.data[0],
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_PHOTO_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchPhoto;
