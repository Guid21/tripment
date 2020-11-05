import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { IItem } from '../../../../../../shared/components/Select/components/Item/Item';
import { Store } from '../../../../../../store';
import { FiltersContext, IFiltersState } from '../../Filters';

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
    setValues(filters.insurances || []);

    // eslint-disable-next-line
  }, [filters.insurances]);

  useEffect(() => {
    const insurances = _(metrika)
      .groupBy('insurances')
      .map((items, value) => ({
        value,
        count: items.length,
        id: value,
      }))
      .orderBy(['count'], ['desc'])
      .value();

    setOptions(insurances);
  }, [metrika]);

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

  return { values, options, setValues };
};
