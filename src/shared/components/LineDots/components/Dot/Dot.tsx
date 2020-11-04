import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Dot.module.scss';

interface IDot {
  background?: string;
  className?: 'secondary';
}

/**
 * Dot component Creates the dot
 */
const Dot: FC<IDot> = ({ className = '' }) => {
  return <span className={cn(styles.Dot, styles[className])}>•</span>;
};

export default Dot;
