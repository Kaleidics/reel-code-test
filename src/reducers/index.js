import { SET_SEED_DATA_SUCCESS, SET_SEARCH_INPUT_SUCCESS, SET_SORTED_DATA_SUCCESS } from '../actions/index';

const initialState = {
    seedData: [],
    searchInput: ""
}

export const Reducer = (state = initialState, action) => {

    if (action.type === SET_SEED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            seedData: action.seed
        });
    }

    if (action.type === SET_SEARCH_INPUT_SUCCESS) {
        return Object.assign({}, state, {
            searchInput: action.searchInput
        });
    }

    if (action.type === SET_SORTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            seedData: action.sortedData
        });
    }

    return state;
}