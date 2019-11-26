import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
function* meditationSaga() {
    yield takeEvery('GET_MEDITATION', getMeditation);
}

function* getMeditation(action) {
    
        console.log(action.payload);
        
    
}

export default meditationSaga;