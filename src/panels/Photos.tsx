import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import fetchPhotos from '../actions/fetchPhotos';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import PhotosComponent from '../components/photos';

type PhotosProps = {
  id: string;
};

const Photos: React.FC<PhotosProps> = ({
  id,
}: PhotosProps) => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhotos());

      setFetching(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeaderWithButton to="/">
          Photos
        </PanelHeaderWithButton>
        <PhotosComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Photos;
