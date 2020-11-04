import { Dispatch } from 'react';
import Axios from 'axios';

import { InsurancesActions } from './insurance.actions';
import { InsurancesAction } from './insurance.reducer';

type GetInsurances = {
  _page?: number;
  _limit?: number;
};

export const getInsurances = (params: GetInsurances) => async (
  dispatch: Dispatch<InsurancesAction>
) => {
  dispatch({ type: InsurancesActions.GetInsuranceError });

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
      type: InsurancesActions.GetInsuranceSuccess,
      payload: {
        items: data.map(({ insurances }: { insurances: string }) => insurances),
      },
    });
  } catch (err) {
    dispatch({ type: InsurancesActions.GetInsuranceError });
  }
};
