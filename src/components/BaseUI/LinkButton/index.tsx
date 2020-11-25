import React from 'react';
import { Link } from 'react-router-dom';

import Button, {
  ButtonProps,
} from '@vkontakte/vkui/dist/components/Button/Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  mode = 'primary',
  children,
}: LinkButtonProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button size="xl" mode={mode}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
