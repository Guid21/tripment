import { SerpActions } from './serp.actions';

export interface Serp {
  id: number;
  name: string;
  speciality: string;
  experience: number;
  gender: string;
  reviewsCount: number;
  acceptNew: boolean;
  address: string;
  insurances: string;
  telehealth: boolean;
  telehealth_available: string;
  offline_available: string;
  price: number;
}

export type SerpState = {
  data: {
    items: Serp[];
  };
  isLoading: boolean;
  isError: boolean;
};

const initialState: SerpState = {
  data: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

export type SerpAction = { type: SerpActions; payload?: { items: Serp[] } };

export default function serpReducer(
  state = initialState,
  { type, payload }: SerpAction
): SerpState {
  switch (type) {
    case SerpActions.GetSerp:
      return {
        ...state,
        isLoading: true,
      };
    case SerpActions.GetSerpError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SerpActions.GetSerpSuccess:
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
