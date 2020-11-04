import React from 'react';

import { Title, Text } from '../../../../shared/components/Typography';
import Button from '../../../../shared/components/Button';
import { Info } from '../../../../shared/icons';

import styles from './Description.module.scss';

const Description = () => {
  return (
    <div className={styles.Description}>
      <Title level={2}>Root Canal doctors in New York, NY</Title>

      <div className={styles.Info}>
        <Button type="Link" className="t-btn_p0">
          <Info size={24} />
        </Button>
        <Text>The average price of a procedure in New York is $300</Text>
      </div>
    </div>
  );
};

export default Description;
