import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { platform, IOS } from '@vkontakte/vkui';

import PanelHeaderButton, {
  PanelHeaderButtonProps,
} from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const Icon: React.FC = () => {
  const osName = platform();

  return osName === IOS ? (
    <Icon28ChevronBack />
  ) : (
    <Icon24Back />
  );
};

interface PanelHeaderButtonBackProps
  extends PanelHeaderButtonProps {
  to: string;
}

const PanelHeaderButtonBack: React.FC<PanelHeaderButtonBackProps> = ({
  to,
}: PanelHeaderButtonBackProps) => {
  const history = useHistory();

  const go = useCallback(() => {
    return history.push(to);
  }, [history, to]);

  return (
    <PanelHeaderButton onClick={go} data-to="home">
      <Icon />
    </PanelHeaderButton>
  );
};

export default PanelHeaderButtonBack;
