import {loadParam} from './Actions';

export default function(store) {
    const element = document.getElementById('app-container');

    let param1 = element.getAttribute('data-param1');

    if (typeof(param1) === 'undefined' || param1 === null) {
        param1 = 'No Parameter Set';
    }

    store.dispatch(loadParam(param1));
}
