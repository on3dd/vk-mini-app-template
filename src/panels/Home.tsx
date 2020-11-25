import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';

import { User } from '@test';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import HomeComponent from '../components/home';

type HomeProps = {
  id: string;
};

const Home: React.FC<HomeProps> = ({ id }: HomeProps) => {
  const [fetching, setFetching] = useState(true);
  const [user, setUser] = useState(null as User);

  useEffect(() => {
    const fetchData = async () => {
      const user = await bridge.send('VKWebAppGetUserInfo');

      setUser(user);
      setFetching(false);
    };

    fetchData();
  }, [setUser, setFetching]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader>Home</PanelHeader>
        <HomeComponent data={user} />
      </Panel>
    </PanelWrapper>
  );
};

export default Home;
