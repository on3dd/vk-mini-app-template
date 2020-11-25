import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import PhotoItem from './Item';

type PhotoProps = {};

const Photo: React.FC<PhotoProps> = (props: PhotoProps) => {
  const photo = useSelector(
    (state: RootState) => state.photo,
  );

  return <PhotoItem data={photo.data} />;
};

export default Photo;
