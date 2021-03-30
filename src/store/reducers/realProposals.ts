import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_PROPOSALS } from '../actions/ActionTypes';

const initialState = {};

const realProposals = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SAVE_PROPOSALS:
      return { ...state, state: action.payload };

    default:
      return state
  }
};


export default realProposals;
