import React from 'react';
import { useSelectContext } from '../../Select';

import Item from '../Item/Item';

import styles from './Groups.module.scss';

interface IGroups {
  onChange: (arg: number | string) => void;
  value: string | number | undefined;
}

const Groups = ({ onChange, value }: IGroups) => {
  const { ...ctx } = useSelectContext();
  const groups = ctx.groups!;

  return (
    <div>
      {groups.map((group, index) => (
        <div className={styles.Group} key={index}>
          {group.map((item) => (
            <Item
              value={item.value}
              count={item.count}
              checked={item.id === value}
              id={item.id}
              key={item.id}
              handler={onChange}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Groups;
