import ACTIONS from './Actions';
import formStatus from './definition/formStatus';

const initialState = {
    message: '',
    param1: '',

    submitStatus: {
        current: '',
        message: ''
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.HELLO_WORLD_SUCCESS:
            return Object.assign({}, state, {
                message: action.payload.body
            });
        case ACTIONS.LOAD_PARAM:
            return Object.assign({}, state, {
                param1: action.payload.message
            });
        case ACTIONS.FORM_SUBMITTED:
            return Object.assign({}, state, {
                submitStatus: {
                    current: formStatus.SUBMITTED,
                    message: 'please wait...'
                }
            });
        case ACTIONS.FORM_SUBMITTED_SUCCESS:
            return Object.assign({}, state, {
                submitStatus: {
                    current: formStatus.SUCCESS,
                    message: 'Great, looks like everything worked out.',
                    payload: action.payload
                }
            });
        case ACTIONS.FORM_SUBMITTED_FAIL:
            return Object.assign({}, state, {
                submitStatus: {
                    current: formStatus.FAIL,
                    message: 'Ugh, not good'
                }
            });

        default:
            return state;
    }
}

export default reducer;
