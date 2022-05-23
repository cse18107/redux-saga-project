import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './usersaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

const store = legacy_createStore(rootReducer,applyMiddleware(...middleware));


sagaMiddleware.run(rootSaga);

export default store;