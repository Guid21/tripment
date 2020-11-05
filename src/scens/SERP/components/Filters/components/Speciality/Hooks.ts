import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { IItem } from '../../../../../../shared/components/Select/components/Item/Item';
import { FiltersContext, IFiltersState } from '../../Filters';
import { Store } from '../../../../../../store';

export const useHooks = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const [values, setValues] = useState<string[]>([]);
  const [options, setOptions] = useState<Omit<IItem, 'handler' | 'checked'>[]>(
    []
  );

  const {
    metrika: {
      data: { items: metrika },
    },
  } = useSelector((state: Store) => state);

  useEffect(() => {
    setValues(filters.speciality || []);

    // eslint-disable-next-line
  }, [filters.speciality]);

  useEffect(() => {
    const options = _(metrika)
      .groupBy('speciality')
      .map((items, value) => ({
        value,
        count: items.length,
        id: value,
      }))
      .orderBy(['count'], ['desc'])
      .value();

    setOptions(options);
  }, [metrika]);

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

  return { values, options, setValues };
};
