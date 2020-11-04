import { SpecialityActions } from './speciality.actions';

export type Speciality = string[];

export type SpecialityState = {
  data: {
    items: Speciality[];
  };
  isLoading: boolean;
  isError: boolean;
};

const initialState: SpecialityState = {
  data: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

export type SpecialityAction = {
  type: SpecialityActions;
  payload?: { items: Speciality[] };
};

export default function serpReducer(
  state = initialState,
  { type, payload }: SpecialityAction
): SpecialityState {
  switch (type) {
    case SpecialityActions.GetSpeciality:
      return {
        ...state,
        isLoading: true,
      };
    case SpecialityActions.GetSpecialityError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SpecialityActions.GetSpecialitySuccess:
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
