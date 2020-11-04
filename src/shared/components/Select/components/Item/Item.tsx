import React, { FC, memo } from 'react';
import styles from './Item.module.scss';

export interface IItem {
  value: string | number | JSX.Element;
  checked?: boolean;
  count?: number;
  id: number | string;
  handler: (arg: number | string) => void;
}

const Item: FC<IItem> = ({ value, count, checked, id, handler = () => {} }) => {
  return (
    <div className={styles.Item}>
      <label className="t-check">
        <input
          className="t-check__input"
          type="checkbox"
          checked={checked}
          onChange={() => handler(id)}
        />
        <span className="t-check__box" />
        <span className={styles.Value}>{value}</span>
        <span className={styles.Count}>({count})</span>
      </label>
    </div>
  );
};

export default memo(Item);
