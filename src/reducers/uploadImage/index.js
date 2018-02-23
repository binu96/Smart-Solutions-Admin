
const actionHandlers = {
    UPLOAD_IMAGE_INIT: (state, action) => ({...state, state: "loading"}),
    UPLOAD_IMAGE_SUCCESS: (state, action) => ({...state, state: "success"}),
};

export default function (state = {}, action) {
    let actionHandler = actionHandlers[action.type];
    return actionHandler ? actionHandler(state, action) : state;
}