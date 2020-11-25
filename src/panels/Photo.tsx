import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchPhoto from '../actions/fetchPhoto';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import PhotoComponent from '../components/photos/id';

type PhotoProps = {
  id: string;
};

type PhotoParams = {
  id: string;
};

const Photo: React.FC<PhotoProps> = ({
  id,
}: PhotoProps) => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  const params: PhotoParams = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhoto(+params.id));

      setFetching(false);
    };

    fetchData();
  }, [dispatch, params.id]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeaderWithButton to="/photos">
          Photo
        </PanelHeaderWithButton>
        <PhotoComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Photo;
