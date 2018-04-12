import { createStore, applyMiddleware, combineReducers} from 'redux'
import {createLogger} from 'redux-logger';
import reducer from './Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga';
import loadState from "./LoadState";
import { reducer as formReducer } from 'redux-form'

const middleware =[];

if (process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

const reducers = combineReducers({
	// ... your other reducers here ...
    main: reducer,
	form: formReducer     // <---- Mounted at 'form'
});

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

loadState(store);

export default store;
