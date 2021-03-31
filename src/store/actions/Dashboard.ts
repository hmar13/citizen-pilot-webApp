import { Dispatch } from 'redux';
import {
  SAVE_PROJECTS,
  SAVE_NEWS,
  SAVE_CONTACTS,
  SAVE_PROPOSALS,
  SAVE_REPORTS,
} from './ActionTypes';
import { getProjects, getAllNews, getContacts, getProposals, getReports, } from '../../services/Apiclient';

//Projects
export function fetchProjects() {
  return function (dispatch: Dispatch) {
    getProjects()
      .then((projects: []) => {
        dispatch(setProjects(projects));
      })
  };
};

export const setProjects = (projects: []) => ({
  type: SAVE_PROJECTS,
  payload: projects,
});

//News
export function fetchNews() {
  return function (dispatch: Dispatch) {
    getAllNews()
      .then((news: []) => {
        dispatch(setNews(news));
      })
  };
}
export const setNews = (news: []) => ({
  type: SAVE_NEWS,
  payload: news,
});

//Contacts
export function fetchContacts() {
  return function (dispatch: Dispatch) {
    getContacts()
      .then((contacts: []) => {
        dispatch(setContacts(contacts));
      })
  };
}

export const setContacts = (contacts: []) => ({
  type: SAVE_CONTACTS,
  payload: contacts
});

//Proposals
export function fetchProposals() {
  return function (dispatch: Dispatch) {
    getProposals()
      .then((proposals: []) => {
        dispatch(setProposals(proposals));
      })
  };
}

export const setProposals = (proposals: []) => ({
  type: SAVE_PROPOSALS,
  payload: proposals

});

//Reports
export function fetchReports() {
  return function (dispatch: Dispatch) {
    getReports()
      .then((reports: []) => {
        dispatch(setReports(reports))
      })
  };
}

export const setReports = (reports: []) => ({
  type: SAVE_REPORTS,
  payload: reports
})
