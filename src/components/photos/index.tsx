import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import PhotosList from './List';

type PhotosProps = {};

const Photos: React.FC<PhotosProps> = (
  props: PhotosProps,
) => {
  const photos = useSelector(
    (state: RootState) => state.photos,
  );

  return <PhotosList data={photos.data} />;
};

export default Photos;
