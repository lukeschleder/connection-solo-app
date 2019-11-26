import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
function* meditationSaga() {
    yield takeEvery('GET_MEDITATION', getMeditation);
}

function* getMeditation(action) {
    try {
        console.log(action.payload);
        
        const meditation = yield axios.get(`/api/meditations/${action.payload.id}`);
        console.log(meditation);
        yield put ({type: 'RANDOM_MEDITATION', payload: meditation.data})
    } catch (error) {
        console.log('error fetching updated user', error);
    }
}

export default meditationSaga;