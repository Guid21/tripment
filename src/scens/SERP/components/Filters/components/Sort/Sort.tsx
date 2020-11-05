import { useEffect } from 'react';
import React, { useState } from 'react';

import { Sorting } from '../../../../../../shared/icons';
import Select from '../../../../../../shared/components/Select';
import { IFiltersState } from '../../Filters';

import styles from './Sort.module.scss';

const mocksSort = [
  {
    id: 'telehealth_available,offline_available',
    value: 'Next available',
  },
  {
    id: 'experience',
    value: 'Most Experienced',
  },
];
interface ISort {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

const Sort = ({ filters, setFilters }: ISort) => {
  const [value, setValue] = useState<string>(
    'telehealth_available,offline_available'
  );

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      _sort: value,
      _order: 'desc',
    }));
  }, [value, setFilters]);

  useEffect(() => setValue(filters._sort), [filters]);

  return (
    <div className={styles.Sort}>
      <Select
        mode="radio"
        onChange={setValue}
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
