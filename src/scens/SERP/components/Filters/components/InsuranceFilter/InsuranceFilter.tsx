import React from 'react';
import cn from 'classnames';

import Select from '../../../../../../shared/components/Select';

import styles from './InsuranceFilter.module.scss';
import { useHooks } from './Hooks';

const InsuranceFilter = () => {
  const { values, options, setValues } = useHooks();

  const headerHolder = (
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
        header={headerHolder}
      />
    </div>
  );
};

export default InsuranceFilter;
