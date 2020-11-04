import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import _ from 'lodash';

import { IItem } from '../../../../../../shared/components/Select/components/Item/Item';
import { getInsurances } from '../../../../../../store/insurance/insurance.effects';
import Select from '../../../../../../shared/components/Select';
import { Store } from '../../../../../../store';
import { IFiltersState } from '../../Filters';

import styles from './InsuranceFilter.module.scss';

interface IInsuranceFilter {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

const InsuranceFilter = ({ filters, setFilters }: IInsuranceFilter) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState<string[]>([]);
  const [options, setOptions] = useState<Omit<IItem, 'handler' | 'checked'>[]>(
    []
  );

  const {
    insurance: {
      data: { items: insurance },
    },
  } = useSelector((state: Store) => state);

  useEffect(() => {
    dispatch(getInsurances({}));
  }, [dispatch]);

  useEffect(() => {
    setValues(filters.insurances || []);

    // eslint-disable-next-line
  }, [filters.insurances]);

  useEffect(() => {
    const insurances = _(insurance)
      .groupBy()
      .map((items, value) => ({
        value,
        count: items.length,
        id: value,
      }))
      .orderBy(['count'], ['desc'])
      .value();

    setOptions(insurances);
  }, [insurance]);

  useEffect(() => {
    if (values.length > 0) {
      setFilters((prev) => ({
        ...prev,
        insurances: values,
      }));
    } else {
      setFilters((prev) => ({
        ...(_.omit(prev, ['insurances']) as IFiltersState),
      }));
    }
  }, [values, setFilters]);

  const header = (
    <div className={styles.Header}>
      <div>Provides other than insurance payment options</div>
      <div>
        <label className="t-switch t-option">
          <input className="t-switch__input" type="checkbox" />
          <span className="t-switch__box" />
        </label>
      </div>
    </div>
  );

  return (
    <div className={cn(styles.InsuranceFilter)}>
      <Select
        mode="multiple"
        name="Insurance"
        value={values}
        options={options}
        onChange={(values) => setValues(values)}
        header={header}
      />
    </div>
  );
};

export default InsuranceFilter;
