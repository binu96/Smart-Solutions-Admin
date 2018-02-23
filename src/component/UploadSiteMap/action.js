import {post} from '../../connector/ServerConnector'

const UPLOAD_IMAGE_URL = '/document/Products';

export function uploadImageInit() {
    return {
        type: "UPLOAD_IMAGE_INIT"
    }
}

export function uploadImageSuccess() {
    return {
        type: 'UPLOAD_IMAGE_SUCCESS'
    }
}

export function uploadImage(request) {
    return function (dispatch) {
        dispatch(uploadImageInit());

        return post(UPLOAD_IMAGE_URL, request)
            .then(() => {
                dispatch(uploadImageSuccess());
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}