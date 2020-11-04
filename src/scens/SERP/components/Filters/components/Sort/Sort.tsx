import React, { useState } from 'react';

import { Sorting } from '../../../../../../shared/icons';
import Select from '../../../../../../shared/components/Select';

import styles from './Sort.module.scss';

const mocksSort = [
  {
    id: 1,
    value: 'Next available',
  },
  {
    id: 2,
    value: 'Most Experienced',
  },
];

// interface ISort {
//   setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
// }

const Sort = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <div className={styles.Sort}>
      <Select
        mode="radio"
        onChange={(id) => setValue((prev) => (id !== prev ? id : undefined))}
        options={mocksSort}
        value={value}
        name={
          <>
            <Sorting className={styles.IconName} /> Sort
          </>
        }
        applyText="Sort"
      />
    </div>
  );
};

export default Sort;
