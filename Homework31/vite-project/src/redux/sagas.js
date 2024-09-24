import { put, takeEvery } from 'redux-saga/effects';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS, loadTodos } from './actions';


function* addTodoSaga() {
    try {
        yield put(loadTodos());
    } catch (error) {
        console.error('Error in addTodoSaga:', error);
    }
}

function* removeTodoSaga() {
    try {
        yield put(loadTodos());
    } catch (error) {
        console.error('Error in removeTodoSaga:', error);
    }
}

function* toggleTodoSaga() {
    try {
        yield put(loadTodos());
    } catch (error) {
        console.error('Error in toggleTodoSaga:', error);
    }
}

function* editTodoSaga() {
    try {
        yield put(loadTodos());
    } catch (error) {
        console.error('Error in editTodoSaga:', error);
    }
}

function* clearTodosSaga() {
    try {
        yield put(loadTodos());
    } catch (error) {
        console.error('Error in clearTodosSaga:', error);
    }
}

export function* watchTodoSagas() {
    yield takeEvery(ADD_TODO, addTodoSaga);
    yield takeEvery(REMOVE_TODO, removeTodoSaga);
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
    yield takeEvery(EDIT_TODO, editTodoSaga);
    yield takeEvery(CLEAR_TODOS, clearTodosSaga);
}