import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_REPORTS } from '../actions/ActionTypes';


const initialState = {};

const realReports = (state = initialState, action: PayloadAction<[]>) => {
  switch (action.type) {
    case SAVE_REPORTS:
      return { ...state, state: action.payload };

    default:
      return state;
  }
};


export default realReports;
