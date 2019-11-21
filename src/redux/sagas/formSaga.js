import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
function* formSaga() {
    yield takeEvery('UPDATE_PROFILE', updateUserGoalsSaga);
}

function* updateUserGoalsSaga(action) {
    console.log(action.payload);
    try {
        const updatedUser = yield axios.put(`/api/updated`, action.payload);
        console.log(updatedUser);
    } catch (error) {
        console.log('error fetching updated user', error);
    }
}

export default formSaga;