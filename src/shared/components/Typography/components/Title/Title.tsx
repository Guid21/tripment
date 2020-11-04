import React, { FC } from 'react';

import './Title.scss';

interface ITitle {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

/**
 * Display title in different level.
 * @param {level} number Set content importance
 */
const Title: FC<ITitle> = ({ level = 1, children }) => {
  if (level === 2) return <h2 className="t-title t-title-h2">{children}</h2>;
  if (level === 3) return <h3 className="t-title t-title-h3">{children}</h3>;
  if (level === 4) return <h4 className="t-title t-title-h4">{children}</h4>;
  if (level === 5) return <h5 className="t-title t-title-h5">{children}</h5>;

  return <h1 className="t-title t-title-h1">{children}</h1>;
};

export default Title;
