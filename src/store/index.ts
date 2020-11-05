import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import serpReducer, { SerpState } from './serp/serp.reducer';
import MetrikaReducer, { MetrikaState } from './metrika/metrika.reducer';

export type Store = {
  serp: SerpState;
  metrika: MetrikaState;
};

const reducers = combineReducers({
  serp: serpReducer,
  metrika: MetrikaReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
