import React from 'react';

import Select from '../../../../../../shared/components/Select';
import { useHooks } from './Hooks';

import styles from './Speciality.module.scss';

const Speciality = () => {
  const { values, options, setValues } = useHooks();

  return (
    <div className={styles.Speciality}>
      <Select
        mode="multiple"
        name="Speciality"
        value={values}
        options={options}
        onChange={setValues}
      />
    </div>
  );
};

export default Speciality;
