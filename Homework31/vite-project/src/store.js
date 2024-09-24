import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './redux/reducer';
import { watchTodoSagas } from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchTodoSagas);

export default store;