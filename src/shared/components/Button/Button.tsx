import React, { FC } from 'react';
import cn from 'classnames';

import './Button.scss';

interface IButton {
  type?: 'Default' | 'Link';
  className?: string;
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  ref?: React.RefObject<HTMLButtonElement>;
}

/**
 * Button component trigger an operation.
 */
const Button: FC<IButton> = ({
  type = 'Default',
  onClick,
  children,
  ref,
  className = '',
}) => {
  let classType: string;

  switch (type) {
    case 'Link':
      classType = 't-btn_link';
      break;
    default:
      classType = 't-btn_default';
      break;
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn('t-btn', classType, className)}
    >
      {children}
    </button>
  );
};

export default Button;
