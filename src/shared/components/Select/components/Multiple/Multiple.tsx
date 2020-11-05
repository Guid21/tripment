import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Multiple.module.scss';
import { useHooks } from '../../Hooks';
import { useSelectContext, ISelect } from '../../Select';
import Item from '../Item';
import FooterPanel from '../FooterPanel';

const Multiple: FC<{}> = () => {
  const [values, setValues] = useState<(string | number)[] | undefined>();
  const [search, setSearch] = useState<string>('');
  const {
    value,
    options,
    name,
    applyText,
    header,
    ...ctx
  }: ISelect<(string | number)[] | undefined> = useSelectContext();
  const onChange = ctx.onChange!;

  const {
    isActiv,
    refSelector,
    refHolder,
    handlerSelector,
    handlerHolder,
  } = useHooks();

  const handlerOptions = (id: string | number) => {
    setValues((prev) => {
      if (!prev) return [id];

      const newState = !!prev?.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      return newState;
    });
  };

  useEffect(() => {
    setValues(value);
    setSearch('');
  }, [isActiv, value]);

  return (
    <div className={styles.Select}>
      <div className={cn(styles.Multiple, { [styles.Active]: isActiv })}>
        <div
          className={styles.Selector}
          ref={refSelector}
          onClick={handlerSelector}
        >
          <button className={cn(styles.Current, 't-btn t-btn_p0')}>
            {name || 'Select'}
          </button>
          {!!value?.length && (
            <span className={cn(styles.Current, 't-typography_bold')}>
              • {value.length || 0}
            </span>
          )}
          <button
            className={cn(styles.Icon, { [styles.Multiple]: !!value?.length })}
            onClick={() => !!value?.length && onChange([])}
          />
        </div>
        <div className={styles.Holder} ref={refHolder}>
          {header && <div className={styles.Header}>{header}</div>}
          <div className={styles.Search}>
            <label className="t-input ">
              <div className="t-input__box">
                <input
                  type="text"
                  placeholder="Filter by speciality"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className={styles.Body}>
            <div className={styles.Options}>
              {options
                ?.filter(({ value }) =>
                  // TODO надо поправить
                  (value as string).toLowerCase().includes(search.toLowerCase())
                )
                .map(({ value, count, id }) => (
                  <Item
                    value={value}
                    count={count}
                    checked={values?.includes(id)}
                    id={id}
                    key={id}
                    handler={handlerOptions}
                  />
                ))}
            </div>
          </div>
          <div>
            <FooterPanel
              handlerApplay={() => {
                onChange(values);
                handlerHolder();
              }}
              handlerReset={() => setValues([])}
              applyText={applyText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiple;
