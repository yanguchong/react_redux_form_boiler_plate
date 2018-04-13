import {all, call, put, takeLatest} from "redux-saga/effects";
import ACTIONS from "./Actions";
import Api from "../shared/api/";

function* helloWorldAction(action){
    try {
        const result = yield call(Api.testApiCall);


            const putAction = {
                "type": ACTIONS.HELLO_WORLD_SUCCESS,
                "payload": result
            };
            yield(put(putAction));

    }
    catch(e){
        const errPutAction = {
            type: ACTIONS.HELLO_WORLD_FAIL,
            payload: e
        };

        yield(put(errPutAction));
    }
}
function* formSubmittedAction(action){
    try {
        /* TODO: replace with real api */
        const result = yield call(Api.testApiCall);

            const putAction = {
                "type": ACTIONS.FORM_SUBMITTED_SUCCESS,
                "payload": result
            };
            yield(put(putAction));

    }
    catch(e){
        const errPutAction = {
            type: ACTIONS.FORM_SUBMITTED_FAIL,
            payload: e
        };

        yield(put(errPutAction));
    }
}



function* helloWorldWatch() {
    yield takeLatest(ACTIONS.HELLO_WORLD, helloWorldAction);
}

function* formSubmittedWatch(){
    yield takeLatest(ACTIONS.FORM_SUBMITTED, formSubmittedAction)
}

const watches = [
    formSubmittedWatch,
    helloWorldWatch,
];

export default function* rootSaga(){
	const watchList =  watches.map(w => {
		return w()
	});
    yield all(watchList);
}

