export const SET_SEED_DATA_SUCCESS = "SET_SEED_DATA_SUCCESS";
export const setSeedDataSuccess = seed => ({
    type: SET_SEED_DATA_SUCCESS,
    seed
});

export const setSeedData = seed => dispatch => {
    dispatch(setSeedDataSuccess(seed));
}