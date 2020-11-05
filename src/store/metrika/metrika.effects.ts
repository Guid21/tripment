import { Dispatch } from 'react';
import Axios from 'axios';

import { MetrikaActions } from './metrika.actions';
import { MetrikaAction } from './metrika.reducer';

export const getMetrika = () => async (dispatch: Dispatch<MetrikaAction>) => {
  dispatch({ type: MetrikaActions.GetMetrikaError });

  try {
    const { data: items } = await Axios.request({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      url: 'http://localhost:3001/serp',
    });

    dispatch({
      type: MetrikaActions.GetMetrikaSuccess,
      payload: {
        items,
      },
    });
  } catch (err) {
    dispatch({ type: MetrikaActions.GetMetrikaError });
  }
};
