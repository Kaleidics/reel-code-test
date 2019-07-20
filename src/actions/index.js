export const SET_SEED_DATA_SUCCESS = "SET_SEED_DATA_SUCCESS";
export const setSeedDataSuccess = seed => ({
    type: SET_SEED_DATA_SUCCESS,
    seed
});

export const setSeedData = seed => dispatch => {
    dispatch(setSeedDataSuccess(seed));
}

export const SET_SEARCH_INPUT_SUCCESS = "SET_SEARCH_INPUT_SUCCESS";
export const setSearchInputSuccess = searchInput => ({
    type: SET_SEARCH_INPUT_SUCCESS,
    searchInput
});

export const setSearchInput = searchInput => dispatch => {
    dispatch(setSearchInputSuccess(searchInput));
}