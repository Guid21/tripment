import { Dispatch } from 'react';
import Axios from 'axios';

import { SerpActions } from './serp.actions';
import { SerpAction } from './serp.reducer';

type GetSerp = {
  _page?: number;
  _limit?: number;
};

export const getSerps = (params: GetSerp) => async (
  dispatch: Dispatch<SerpAction>
) => {
  dispatch({ type: SerpActions.GetSerp });

  try {
    const { data: items } = await Axios.request({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      url: 'http://localhost:3001/serp',
      params,
    });

    dispatch({ type: SerpActions.GetSerpSuccess, payload: { items } });
  } catch (err) {
    dispatch({ type: SerpActions.GetSerpError });
  }
};
