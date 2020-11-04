import React, { FC } from 'react';
import cn from 'classnames';

import './Text.scss';

interface IText {
  className?: string;
}

/**
 * Provides multiple types of text and link.
 */
const Text: FC<IText> = ({ className = '', children }) => {
  return <span className={cn('t-text', className)}>{children}</span>;
};

export default Text;
