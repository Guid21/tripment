import React from 'react';

import { useHooks } from './Hooks';
import Select from '../../../../../../shared/components/Select';

import styles from './Availability.module.scss';

const Availability = () => {
  const { value, setValue, mockGroups } = useHooks();

  return (
    <div className={styles.Availability}>
      <Select
        onChange={setValue}
        groups={mockGroups}
        value={value}
        name="Availability"
        applyText="Availability"
      />
    </div>
  );
};

export default Availability;
