import { Dispatch } from 'react';
import Axios from 'axios';

import { SpecialityActions } from './speciality.actions';
import { SpecialityAction } from './speciality.reducer';

type GetSpeciality = {
  _page?: number;
  _limit?: number;
};

export const getSpeciality = (params: GetSpeciality) => async (
  dispatch: Dispatch<SpecialityAction>
) => {
  dispatch({ type: SpecialityActions.GetSpecialityError });

  try {
    const { data } = await Axios.request({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      url: 'http://localhost:3001/serp',
      params,
    });

    dispatch({
      type: SpecialityActions.GetSpecialitySuccess,
      payload: {
        items: data.map(({ speciality }: { speciality: string }) => speciality),
      },
    });
  } catch (err) {
    dispatch({ type: SpecialityActions.GetSpecialityError });
  }
};
