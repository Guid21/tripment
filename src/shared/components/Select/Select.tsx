import React, { createContext, FC, useContext } from 'react';
import { once } from 'lodash';
import { IItem } from './components/Item/Item';
import Single from './components/Single';
import Multiple from './components/Multiple/Multiple';
import Radio from './components/Radio';

export interface ISelect<T> {
  mode?: 'multiple' | 'radio';
  groups?: Omit<IItem, 'handler'>[][];
  value?: T;
  name?: string | JSX.Element;
  options?: Omit<IItem, 'handler'>[];
  onChange?: (arg: T) => void;
  applyText?: string;
  header?: JSX.Element;
}

const createSelectContext = once(<T,>() => createContext({} as ISelect<T>));
export const useSelectContext = <T,>() => useContext(createSelectContext<T>());

/**
 * Select component to select value from options..
 */
const Select = function <T>(props: ISelect<T>) {
  const SelecContext = createSelectContext<T>();

  const Provider = (children: JSX.Element) => (
    <SelecContext.Provider value={props}>{children}</SelecContext.Provider>
  );

  if (props.mode === 'multiple') return Provider(<Multiple />);
  else if (props.mode === 'radio') return Provider(<Radio />);

  return Provider(<Single />);
};

export default Select;
