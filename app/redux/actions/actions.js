import actionID from './actionID';

export default {
  START_APP: () => ({
    type: actionID.START_APP,
  }),
  UPDATE_DATA_REQUEST: payload => ({
    type: actionID.UPDATE_DATA_REQUEST,
    payload: payload,
  }),
  UPDATE_DATA: payload => ({
    type: actionID.UPDATE_DATA,
    payload: payload,
  }),
  ADD_TODO: payload => ({
    type: actionID.ADD_TODO,
    payload: payload,
  }),
  ADD_TODO_REQUEST: payload => ({
    type: actionID.ADD_TODO_REQUEST,
    payload: payload,
  }),
  DELETE_TODO: payload => ({
    type: actionID.DELETE_TODO,
    payload: payload,
  }),
  DELETE_TODO_REQUEST: payload => ({
    type: actionID.DELETE_TODO_REQUEST,
    payload: payload,
  }),
  SEARCH_TODO: payload => ({
    type: actionID.SEARCH_TODO,
    payload: payload,
  }),
  SET_STATUS_TODO_REQUEST: payload => ({
    type: actionID.SET_STATUS_TODO_REQUEST,
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
  SET_NOTIFICATION: payload => ({
    type: actionID.SET_NOTIFICATION,
    payload: payload,
  }),
};
