import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import Sort from './components/Sort/Sort';
import Speciality from './components/Speciality';
import ClearFilters from './components/ClearFilters';
import Availability from './components/Availability';
import InsuranceFilter from './components/InsuranceFilter';
import { getSerps } from '../../../../store/serp/serp.effects';

import styles from './Filters.module.scss';

export interface IFiltersState {
  sort: string[];
  insurances?: string[];
  speciality?: string[];
  _order?: string;
  _sort?: string;
}

export const initialFilters = {
  sort: [],
};

const Filters = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [filters, setFilters] = useState<IFiltersState>(initialFilters);

  useDebounce(() => dispatch(getSerps({ ...filters, _limit: 20 })), 10, [
    filters,
    dispatch,
  ]);

  return (
    <div className={styles.Filters}>
      <Availability />
      <Speciality setFilters={setFilters} filters={filters} />
      <InsuranceFilter setFilters={setFilters} filters={filters} />
      <Sort />
      <ClearFilters setFilters={setFilters} />
    </div>
  );
};

export default Filters;
