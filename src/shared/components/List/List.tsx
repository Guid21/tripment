import React from 'react';
import styles from './List.module.scss';

interface IList {
  data: JSX.Element[];
}

/**
 * Basic list.
 * @param {data} JSX.Element[] Items
 */
const List = ({ data }: IList) => {
  return (
    <div className={styles.List}>
      {data.map((row, index) => (
        <div className={styles.Row} key={index}>
          {row}
        </div>
      ))}
    </div>
  );
};

export default List;
