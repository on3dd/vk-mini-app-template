import React from 'react';

import PanelHeader, {
  PanelHeaderProps,
} from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderButtonBack from './Button';

interface PanelHeaderWithButtonProps
  extends PanelHeaderProps {
  to: string;
}

const PanelHeaderWithButton: React.FC<PanelHeaderWithButtonProps> = ({
  to,
  children,
}: PanelHeaderWithButtonProps) => {
  return (
    <PanelHeader left={<PanelHeaderButtonBack to={to} />}>
      {children}
    </PanelHeader>
  );
};

export default PanelHeaderWithButton;
