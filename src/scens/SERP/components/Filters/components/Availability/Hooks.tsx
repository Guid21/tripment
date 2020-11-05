import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import { Store } from '../../../../../../store';
import { Videovisit } from '../../../../../../shared/icons';
import { FiltersContext, IFiltersState } from '../../Filters';

import styles from './Availability.module.scss';

type value = [
  'telehealth',
  'acceptNew',
  'telehealth_available_gte',
  'telehealth_available_lte',
  'offline_available_gte',
  'offline_available_lte'
];

const values: value = [
  'telehealth',
  'acceptNew',
  'telehealth_available_gte',
  'telehealth_available_lte',
  'offline_available_gte',
  'offline_available_lte',
];
const currentDay = moment({ h: 0, m: 0, s: 0, ms: 0 });
const threeDays = moment().add(3, 'days');
const twoWeeks = moment().add(14, 'days');

export const useHooks = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const [value, setValue] = useState<string | undefined>();

  const {
    metrika: {
      data: { items: metrika },
    },
  } = useSelector((state: Store) => state);

  const mockGroups = useMemo(() => {
    let telehealthCounter = 0;
    let acceptNewCounter = 0;
    let todayCounter = 0;
    let threeDaysCounter = 0;
    let twoWeeksCounter = 0;

    metrika.forEach((item) => {
      const telehealthAvailable = moment(item.telehealth_available);
      const offlineAvailable = moment(item.offline_available);

      console.log(currentDay >= telehealthAvailable);
      item.telehealth && telehealthCounter++;
      item.acceptNew && acceptNewCounter++;
      if (currentDay === telehealthAvailable || currentDay === offlineAvailable)
        todayCounter++;
      if (
        (currentDay <= telehealthAvailable &&
          threeDays >= telehealthAvailable) ||
        (currentDay <= offlineAvailable && threeDays >= offlineAvailable)
      )
        threeDaysCounter++;
      if (
        (currentDay <= telehealthAvailable &&
          twoWeeks >= telehealthAvailable) ||
        (currentDay <= offlineAvailable && twoWeeks >= offlineAvailable)
      )
        twoWeeksCounter++;
    });

    return [
      [
        {
          id: 'Today',
          value: 'Today',
          count: todayCounter,
        },
        {
          id: 'three-days',
          value: 'Next 3 days',
          count: threeDaysCounter,
        },
        {
          id: 'two-weeks',
          value: 'Next 2 weeks',
          count: twoWeeksCounter,
        },
      ],
      [
        {
          id: 'telehealth',
          value: (
            <div className={styles.Item}>
              <Videovisit className={styles.Icon} />
              Telehealth
            </div>
          ),
          count: telehealthCounter,
        },
        {
          id: 'acceptNew',
          value: 'Accepts new patients',
          count: acceptNewCounter,
        },
        // TODO нет такого поля для фильтрации
        {
          id: 6,
          value: 'Schedules online',
          count: 0,
        },
        // TODO нет такого поля для фильтрации
        {
          id: 7,
          value: 'Treats сhildren',
          count: 0,
        },
      ],
    ];
  }, [metrika]);

  useEffect(() => {
    setFilters((prev) => {
      const payload: IFiltersState = _.omit(prev, [...values]);

      if (value === 'telehealth') payload.telehealth = true;
      else if (value === 'acceptNew') payload.acceptNew = true;
      // JSON server, не позволяет реализовать OR по фильтрам Range
      else if (value === 'today') {
        payload.telehealth_available_gte = currentDay.format('YYYY-MM-DD');
        payload.telehealth_available_lte = currentDay.format('YYYY-MM-DD');
        payload.offline_available_gte = currentDay.format('YYYY-MM-DD');
        payload.offline_available_lte = currentDay.format('YYYY-MM-DD');
      } else if (value === 'three-days') {
        payload.telehealth_available_gte = currentDay.format('YYYY-MM-DD');
        payload.telehealth_available_lte = threeDays.format('YYYY-MM-DD');
        payload.offline_available_gte = currentDay.format('YYYY-MM-DD');
        payload.offline_available_lte = threeDays.format('YYYY-MM-DD');
      } else if (value === 'two-weeks') {
        payload.telehealth_available_gte = currentDay.format('YYYY-MM-DD');
        payload.telehealth_available_lte = twoWeeks.format('YYYY-MM-DD');
        payload.offline_available_gte = currentDay.format('YYYY-MM-DD');
        payload.offline_available_lte = twoWeeks.format('YYYY-MM-DD');
      }

      return payload;
    });
  }, [value, setFilters]);

  useEffect(() => {
    if (
      Object.keys(filters).filter((key: any) => values.includes(key)).length ===
      0
    )
      setValue('');
  }, [filters]);

  return { value, setValue, mockGroups };
};
