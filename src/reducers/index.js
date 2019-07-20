import { SET_SEED_DATA_SUCCESS } from '../actions/index';

const initialState = {
    seedData: []
}

export const Reducer = (state = initialState, action) => {

    if (action.type === SET_SEED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            seedData: action.seed
        });
    }

    return state;
}