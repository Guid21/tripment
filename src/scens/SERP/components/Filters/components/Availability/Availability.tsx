import React, { useState } from 'react';

import Select from '../../../../../../shared/components/Select';
import { Videovisit } from '../../../../../../shared/icons';

import styles from './Availability.module.scss';

const mocksGroups = [
  [
    {
      id: 1,
      value: 'Today',
      count: 2,
    },
    {
      id: 2,
      value: 'Next 3 days',
      count: 1,
    },
    {
      id: 3,
      value: 'Next 2 weeks',
      count: 5,
    },
  ],
  [
    {
      id: 4,
      value: (
        <div className={styles.Item}>
          <Videovisit className={styles.Icon} />
          Telehealth
        </div>
      ),
      count: 2,
    },
    {
      id: 5,
      value: 'Accepts new patients',
      count: 1,
    },
    {
      id: 6,
      value: 'Schedules online',
      count: 5,
    },
    {
      id: 7,
      value: 'Treats сhildren',
      count: 5,
    },
  ],
];

// interface IAvailability {
//   setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
// }

const Availability = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <div className={styles.Availability}>
      <Select
        onChange={(id) => setValue((prev) => (id !== prev ? id : undefined))}
        groups={mocksGroups}
        value={value}
        name="Availability"
        applyText="Availability"
      />
    </div>
  );
};

export default Availability;
