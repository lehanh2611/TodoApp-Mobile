import actionID from './actionID';

export default {
  ADD_TODO: payload => ({
    type: actionID.ADD_TODO,
    payload: payload,
  }),
  DELETE_TODO: payload => ({
    type: actionID.DELETE_TODO,
    payload: payload,
  }),
  SEARCH_TODO: payload => ({
    type: actionID.SEARCH_TODO,
    payload: payload,
  }),
  SET_STATUS_TODO: payload => ({
    type: actionID.SET_STATUS_TODO,
    payload: payload,
  }),
  FILTER_TODO: payload => ({
    type: actionID.FILTER_TODO,
    payload: payload,
  }),
};
