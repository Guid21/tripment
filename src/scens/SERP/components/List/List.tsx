import React from 'react';
import { useSelector } from 'react-redux';

import ListUi from '../../../../shared/components/List';
import { Store } from '../../../../store';
import Row from './components/Row';

import styles from './List.module.scss';

const List = () => {
  const { serp } = useSelector((state: Store) => state);

  if (!serp.data.items.length) return <>Empty</>;

  const data = serp.data.items.map((record) => <Row {...{ record }} />);

  return (
    <div className={styles.List}>
      <ListUi data={data} />
    </div>
  );
};

export default List;
