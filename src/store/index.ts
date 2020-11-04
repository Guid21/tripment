import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import serpReducer, { SerpState } from './serp/serp.reducer';
import InsurancesReducer, {
  InsurancesState,
} from './insurance/insurance.reducer';
import SpecialityReducer, {
  SpecialityState,
} from './speciality/speciality.reducer';

export type Store = {
  serp: SerpState;
  insurance: InsurancesState;
  speciality: SpecialityState;
};

const reducers = combineReducers({
  serp: serpReducer,
  insurance: InsurancesReducer,
  speciality: SpecialityReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
