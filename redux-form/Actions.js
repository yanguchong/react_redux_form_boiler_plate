const APP_ACTIONS = {
    HELLO_WORLD: 'HELLO_WORLD',
    HELLO_WORLD_SUCCESS: 'HELLO_WORLD_SUCCESS',
    HELLO_WORLD_FAIL: 'HELLO_WORLD_FAIL',

    LOAD_PARAM: 'LOAD_PARAM',

    FORM_SUBMITTED: 'FORM_SUBMITTED',
    FORM_SUBMITTED_SUCCESS: 'FORM_SUBMITTED_SUCCESS',
    FORM_SUBMITTED_FAIL: 'FORM_SUBMITTED_FAIL',
};

export function helloWorld(message){
    return {
        type: APP_ACTIONS.HELLO_WORLD,
        payload: {
            message: message
        }
    }
}

export function loadParam(message){
    return {
        type: APP_ACTIONS.LOAD_PARAM,
        payload: {
            message: message
        }
    }
}

export function fireAction(action){
    return action;
}

export default {...APP_ACTIONS}
