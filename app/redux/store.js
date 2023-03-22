import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';
createSagaMiddleware;

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
