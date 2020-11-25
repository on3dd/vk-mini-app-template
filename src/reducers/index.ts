import { combineReducers } from 'redux';

import photosReducer from './photos.reducer';
import photoReducer from './photo.reducer';

export default combineReducers({
  photos: photosReducer,
  photo: photoReducer,
});
