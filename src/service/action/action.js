import useFetch from "../../hooks/useFetch";

export const DATA = 'DATA';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const READ_ONLY = 'READ_ONLY';
export const EDIT_ONLY = 'EDIT_ONLY';

export const SORTING = 'SORTING';

export const getItems = () => {
    return (dispatch) => {
        useFetch(
            dispatch,
            GET_ITEMS_SUCCESS,
            GET_ITEMS_FAILED,
            GET_ITEMS_REQUEST,
            "GET"
        )
    }
}