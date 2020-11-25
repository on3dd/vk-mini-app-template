import {
  FETCHING_PHOTO,
  FETCHING_PHOTO_SUCCESS,
  FETCHING_PHOTO_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, PhotoState } from '@test';

const initialState: PhotoState = {
  data: {
    id: 0,
    albumId: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const photoReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_PHOTO:
      return Object.assign({}, state, {
        data: [],
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PHOTO_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default photoReducer;
