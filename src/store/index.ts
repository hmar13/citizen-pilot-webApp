import { combineReducers } from 'redux';
import user from './reducers/user';
import realProjects from './reducers/realProjects';
import realNews from './reducers/realNews';
import realContacts from './reducers/realContacts';
import realProposals from './reducers/realProposals';
import realReports from './reducers/realReports';


export const reducers = combineReducers({
  user,
  realProjects,
  realNews,
  realContacts,
  realProposals,
  realReports,
});

export type RootState = ReturnType<typeof reducers>;
