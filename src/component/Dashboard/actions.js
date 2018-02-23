/**
 * Created by tiran on 8/4/17.
 */
import {get} from '../../connector/ServerConnector'

const INITIAL_DATA_URL = '/admin/uploadImageInit';

export function init() {
    return {
        type: "INIT"
    }
}

export function initSuccess(data) {
    return {
        type: 'INIT_SUCCESS',
        data
    }
}

export function initFailed(error) {
    return {
        type: 'INIT_FAILED',
        error
    }
}

export function fetchInit() {
    return function (dispatch) {
        dispatch(init());

        return get(INITIAL_DATA_URL)
            .then((response) => {
                dispatch(initSuccess(response.data));
                console.log(response)
            })
            .catch((error) => {
                dispatch(initFailed(error.message))
            })
    }
}