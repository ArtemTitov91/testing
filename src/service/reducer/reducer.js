import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    OPEN_MODAL,
    READ_ONLY,
    EDIT_ONLY,
    CLOSE_MODAL,
    SORTING
} from '../action/action';

export const store = {
    data: [],
    itemsRequest: false,
    itemsFailed: false,

    modal: false,
    element: null,

    readOnly: false,
}


export const reducer = (state = store, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            };
        }
        case GET_ITEMS_SUCCESS: {
            return { ...state, itemsFailed: false, data: action.data, itemsRequest: false };
        }
        case GET_ITEMS_FAILED: {
            return { ...state, itemsFailed: true, itemsRequest: false };
        }
        case OPEN_MODAL: {
            return { ...state, modal: true, element: action.data };
        }
        case CLOSE_MODAL: {
            return { ...state, modal: false };
        }
        case READ_ONLY: {
            return { ...state, readOnly: false };
        }
        case EDIT_ONLY: {
            return { ...state, readOnly: true };
        }
        case SORTING: {
            return { ...state, data: action.data };
        }
        default: {
            return state;
        }
    }
}
