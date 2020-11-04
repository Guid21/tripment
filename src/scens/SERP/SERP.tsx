import React from 'react';

import Description from './components/Description';
import Filters from './components/Filters';
import List from './components/List';

import styles from './SERP.module.scss';

const SERP = () => {
  return (
    <div className={styles.Root}>
      <div>
        <Filters />
      </div>
      <div>
        <Description />
      </div>
      <List />
    </div>
  );
};

export default SERP;
