import {
  FETCHING_PHOTOS,
  FETCHING_PHOTOS_SUCCESS,
  FETCHING_PHOTOS_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, PhotosState } from '@test';

const initialState: PhotosState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const photosReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_PHOTOS:
      return Object.assign({}, state, {
        data: [],
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PHOTOS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PHOTOS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default photosReducer;
