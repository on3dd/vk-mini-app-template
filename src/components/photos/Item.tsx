import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Photo } from '@test';

import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

type ItemProps = {
  data: Photo;
};

const Item: React.FC<ItemProps> = ({ data }: ItemProps) => {
  const history = useHistory();

  const before = useMemo(() => {
    return <Avatar size={28} src={data.thumbnailUrl} />;
  }, [data.thumbnailUrl]);

  const go = useCallback(() => {
    return history.push(`/photos/${data.id}`);
  }, [history, data.id]);

  return (
    <SimpleCell
      className="photos__item"
      before={before}
      onClick={go}
      data-to="posts"
    >
      {data.title}
    </SimpleCell>
  );
};

export default Item;
