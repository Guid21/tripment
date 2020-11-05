import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import SERP from './scens/SERP';

import './App.module.scss';

// TODO Отрефакторить
// TODO Внедрить UiTripment в shared/components
function App() {
  return (
    <Provider {...{ store }}>
      <SERP />
    </Provider>
  );
}

export default App;
