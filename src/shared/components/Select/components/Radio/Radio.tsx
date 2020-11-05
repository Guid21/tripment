import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Radio.module.scss';
import { useHooks } from '../../Hooks';
import { ISelect, useSelectContext } from '../../Select';

const Radio: FC<{}> = () => {
  const [option, setOption] = useState<string | number | undefined>();
  const {
    value,
    options,
    name,
    applyText,
    ...ctx
  }: ISelect<string | number | undefined> = useSelectContext();
  const onChange = ctx.onChange!;

  const {
    isActiv,
    refSelector,
    refHolder,
    handlerSelector,
    handlerHolder,
  } = useHooks();

  useEffect(() => {
    setOption(value || options?.[0].id);

    // eslint-disable-next-line
  }, [isActiv, value, setOption]);

  return (
    <div className={cn(styles.Radio, { [styles.Active]: isActiv })}>
      <div
        className={styles.Selector}
        ref={refSelector}
        onClick={handlerSelector}
      >
        <button className={cn(styles.Current, 't-btn t-btn_p0')}>
          {name || 'Radio Select'}
        </button>
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
          {options?.map(({ value, id }) => (
            <label className="t-radio t-option" key={id}>
              <input
                name="sort"
                type="radio"
                className="t-radio__input"
                value={id}
                checked={id === option}
                onChange={() => setOption(id)}
              />
              <span className="t-radio__box" />
              {value}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Radio;
