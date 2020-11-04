import React, { memo, useEffect, useState } from 'react';
import _ from 'lodash';

// import { Sort, Option } from '../../../../../../shared/components/Select';
import { IFiltersState } from '../../Filters';

import styles from './SortFilter.module.scss';

interface ISortFilter {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

const SortFilter = ({ setFilters, filters }: ISortFilter) => {
  const [sort, setStor] = useState<string[]>([]);

  useEffect(() => {
    const _order: string[] = [],
      _sort: string[] = [];

    if (sort.length > 0) {
      if (sort.includes('experience')) {
        _order.push('desc');
        _sort.push('experience');
      }
      if (sort.includes('available')) {
        _order.push('desc');
        _order.push('desc');
        _sort.push('telehealth_available');
        _sort.push('offline_available');
      }

      setFilters((prev) => ({
        ...prev,
        _sort: _sort.toString(),
        _order: _order.toString(),
      }));
    } else {
      setFilters((prev) => ({
        ...(_.omit(prev, ['_order', '_sort']) as IFiltersState),
      }));
    }
  }, [sort, setFilters]);

  useEffect(() => {
    setStor(filters.sort || []);
  }, [filters.sort]);

  return (
    <div className={styles.SortFilter}>
      {/* <Sort value={sort} onChange={setStor}>
        <Option value={'available'}>Next available</Option>
        <Option value={'experience'}>Most Experienced</Option>
      </Sort> */}
    </div>
  );
};

export default memo(SortFilter);
