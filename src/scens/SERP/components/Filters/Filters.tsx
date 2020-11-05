import React, { useEffect, useState, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import Sort from './components/Sort/Sort';
import Speciality from './components/Speciality';
import ClearFilters from './components/ClearFilters';
import Availability from './components/Availability';
import InsuranceFilter from './components/InsuranceFilter';
import { getSerps } from '../../../../store/serp/serp.effects';
import { getMetrika } from '../../../../store/metrika/metrika.effects';

import styles from './Filters.module.scss';

export interface IFiltersState {
  _sort: string;
  _order: string;
  insurances?: string[];
  speciality?: string[];
  telehealth?: boolean;
  acceptNew?: boolean;
  telehealth_available_lte?: string;
  telehealth_available_gte?: string;
  offline_available_lte?: string;
  offline_available_gte?: string;
}

export const initialFilters = {
  _sort: 'telehealth_available,offline_available',
  _order: 'desc',
};

interface IFiltersContext {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

export const FiltersContext = createContext<IFiltersContext>({
  filters: initialFilters,
  setFilters: () => {},
});

const Filters = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [filters, setFilters] = useState<IFiltersState>(initialFilters);

  useDebounce(() => dispatch(getSerps({ ...filters, _limit: 20 })), 10, [
    filters,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(getMetrika());
  }, [dispatch]);

  return (
    <div className={styles.Filters}>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Availability />
        <Speciality />
        <InsuranceFilter />
        <Sort setFilters={setFilters} filters={filters} />
        <ClearFilters setFilters={setFilters} />
      </FiltersContext.Provider>
    </div>
  );
};

export default Filters;
