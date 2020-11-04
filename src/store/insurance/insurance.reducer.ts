import { InsurancesActions } from './insurance.actions';

export type Insurances = string[];

export type InsurancesState = {
  data: {
    items: Insurances[];
  };
  isLoading: boolean;
  isError: boolean;
};

const initialState: InsurancesState = {
  data: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

export type InsurancesAction = {
  type: InsurancesActions;
  payload?: { items: Insurances[] };
};

export default function serpReducer(
  state = initialState,
  { type, payload }: InsurancesAction
): InsurancesState {
  switch (type) {
    case InsurancesActions.GetInsurance:
      return {
        ...state,
        isLoading: true,
      };
    case InsurancesActions.GetInsuranceError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case InsurancesActions.GetInsuranceSuccess:
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
