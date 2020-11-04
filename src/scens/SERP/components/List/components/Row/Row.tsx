import React, { FC, useMemo } from 'react';
import cn from 'classnames';

import { Title, Text } from '../../../../../../shared/components/Typography';
import LineDots from '../../../../../../shared/components/LineDots';
import { Serp } from '../../../../../../store/serp/serp.reducer';
import Avatar from '../../../../../../shared/components/Avatar';
import { Person } from '../../../../../../shared/icons';

import styles from './Row.module.scss';
import Button from '../../../../../../shared/components/Button';

interface IRow {
  record: Serp;
}

const Row: FC<IRow> = ({ record }) => {
  const experience = useMemo(
    () =>
      `${record.experience} Year${record.experience > 1 ? 's' : ''} Experience`,
    [record]
  );
  const reviewsCount = useMemo(
    () => `${record.reviewsCount} Review${record.experience > 1 ? 's' : ''}`,
    [record]
  );

  return (
    <div className={styles.Row}>
      <div>
        <Avatar
          src={`https://randomuser.me/api/portraits/${
            record.gender === 'Male' ? 'men' : 'women'
          }/${record.id}.jpg`}
          videovisit={record.telehealth}
        />
      </div>
      <div>
        <LineDots data={[<Title level={3}>{record.name}</Title>]} />
        <LineDots
          data={[
            <Text className={styles.Speciality}>{record.speciality}</Text>,
            <Text>{experience}</Text>,
            <Button type="Link" className={'t-btn_p0'}>
              <Text className="t-text_link">{reviewsCount}</Text>
            </Button>,
          ]}
        />
        <LineDots
          className="secondary"
          data={
            record.telehealth
              ? [
                  <Text className="t-text_secondary">Video visit</Text>,
                  <Text className="t-text_secondary">{record.address}</Text>,
                ]
              : [<Text className="t-text_secondary">{record.address}</Text>]
          }
        />
      </div>
      <div>
        <Text className="t-text_underline">avg. price</Text>
        <Text
          className={cn('t-text_subtitle', styles.Price)}
        >{`$${record.price}`}</Text>
        <Button type="Link" className={cn('t-btn_p0', styles.Like)}>
          <Person size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Row;
