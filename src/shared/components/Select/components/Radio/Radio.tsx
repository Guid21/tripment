import React, { FC, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import Groups from '../Groups';

import styles from './Radio.module.scss';
import { useHooks } from '../../Hooks';
import { ISelect, useSelectContext } from '../../Select';

const Radio: FC<{}> = () => {
  const [option, setOption] = useState<string | number | undefined>();
  const {
    value,
    groups,
    name,
    applyText,
    ...ctx
  }: ISelect<string | number | undefined> = useSelectContext();
  const onChange = ctx.onChange!;

  const itam = useMemo(
    () => groups?.flat().find((item) => item?.id === value)?.value,
    [groups, value]
  );

  const {
    isActiv,
    refSelector,
    refHolder,
    handlerSelector,
    handlerHolder,
  } = useHooks();

  useEffect(() => {
    setOption(value);
  }, [isActiv, value]);

  return (
    <div className={cn(styles.Radio, { [styles.Active]: isActiv })}>
      <div
        className={styles.Selector}
        ref={refSelector}
        onClick={handlerSelector}
      >
        <span className={styles.Current}>{itam || name || 'Radio Select'}</span>
        <button className={styles.Icon} />
      </div>
      <div className={styles.Holder} ref={refHolder}>
        <button
          className={cn(styles.Header, 't-btn t-btn_link t-btn_p0 t-btn_bold')}
          onClick={() => {
            onChange(option);
            handlerHolder();
          }}
        >
          {applyText || 'Apply'}
        </button>
        <div className={styles.Body}>
          {groups && <Groups onChange={setOption} value={option} />}
        </div>
      </div>
    </div>
  );
};

export default Radio;
