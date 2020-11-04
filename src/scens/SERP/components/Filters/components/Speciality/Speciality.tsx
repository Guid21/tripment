import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { IItem } from '../../../../../../shared/components/Select/components/Item/Item';
import { getSpeciality } from '../../../../../../store/speciality/speciality.effects';
import Select from '../../../../../../shared/components/Select';
import { Store } from '../../../../../../store';

import styles from './Speciality.module.scss';
import { IFiltersState } from '../../Filters';

interface ISpeciality {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

const Speciality = ({ setFilters, filters }: ISpeciality) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<string[]>([]);
  const [options, setOptions] = useState<Omit<IItem, 'handler' | 'checked'>[]>(
    []
  );

  const {
    speciality: {
      data: { items: speciality },
    },
  } = useSelector((state: Store) => state);

  useEffect(() => {
    dispatch(getSpeciality({}));
  }, [dispatch]);

  useEffect(() => {
    setValues(filters.speciality || []);

    // eslint-disable-next-line
  }, [filters.speciality]);

  useEffect(() => {
    const options = _(speciality)
      .groupBy()
      .map((items, value) => ({
        value,
        count: items.length,
        id: value,
      }))
      .orderBy(['count'], ['desc'])
      .value();

    setOptions(options);
  }, [speciality]);

  useEffect(() => {
    if (values.length > 0) {
      setFilters((prev) => ({
        ...prev,
        speciality: values,
      }));
    } else {
      setFilters((prev) => ({
        ...(_.omit(prev, ['speciality']) as IFiltersState),
      }));
    }
  }, [values, setFilters]);

  return (
    <div className={styles.Speciality}>
      <Select
        mode="multiple"
        name="Speciality"
        value={values}
        options={options}
        onChange={(values) => setValues(values)}
      />
    </div>
  );
};

export default Speciality;
