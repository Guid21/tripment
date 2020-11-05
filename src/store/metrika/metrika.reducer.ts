import { MetrikaActions } from './metrika.actions';
import { Serp } from '../serp/serp.reducer';

export type MetrikaState = {
  data: {
    items: Serp[];
  };
  isLoading: boolean;
  isError: boolean;
};

const metrikalState: MetrikaState = {
  data: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

export type MetrikaAction = {
  type: MetrikaActions;
  payload?: { items: Serp[] };
};

export default function serpReducer(
  state = metrikalState,
  { type, payload }: MetrikaAction
): MetrikaState {
  switch (type) {
    case MetrikaActions.GetMetrika:
      return {
        ...state,
        isLoading: true,
      };
    case MetrikaActions.GetMetrikaError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case MetrikaActions.GetMetrikaSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {
          items: payload?.items || [],
        },
      };
    default:
      return state;
  }
}
