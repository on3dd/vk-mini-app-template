import { Dispatch } from '@test/thunk';

import axiosService from '../utils/axiosService';

import {
  FETCHING_PHOTOS,
  FETCHING_PHOTOS_SUCCESS,
  FETCHING_PHOTOS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchPhotos = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_PHOTOS });

    return axiosService
      .get(API_ENDPOINTS.photos.index)
      .then((res) => {
        dispatch({
          type: FETCHING_PHOTOS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_PHOTOS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchPhotos;
