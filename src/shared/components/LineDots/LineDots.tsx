import React from 'react';
import styles from './LineDots.module.scss';
import Dot from './components/Dot';

interface ILineDots {
  data: JSX.Element[];
  className?: 'secondary';
}

/**
 * LineDots component Creates a line with dots
 * @param {data} number Data record array to be displayed
 */
const LineDots = ({ data, className }: ILineDots) => {
  return (
    <div className={styles.LineDots}>
      {data.reduce((prev, curr) => (
        <>
          {prev} <Dot className={className} /> {curr}
        </>
      ))}
    </div>
  );
};

export default LineDots;
