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

export const SET_SORTED_DATA_SUCCESS = "SET_SORTED_DATA_SUCCESS";
export const setSortedDataSuccess = sortedData => ({
    type: SET_SORTED_DATA_SUCCESS,
    sortedData
});

export const setSortedData = sortedData => dispatch => {
    dispatch(setSortedDataSuccess(sortedData));
}

export const CHANGE_REEL_STATUS_SUCCESS = "CHANGE_REEL_STATUS_SUCCESS";
export const changeReelStatusSuccess = updatedArray => ({
    type: CHANGE_REEL_STATUS_SUCCESS,
    updatedArray
});

export const changeReelStatus = (currentArray, reel, status) => dispatch => {

    console.log("before", currentArray)
    let updatedArray = currentArray;
    for (let i = 0; i < updatedArray.length; i++ ) {
        if (updatedArray[i].name === reel) {
            console.log('updated', updatedArray[i])
            updatedArray[i].status = status
        }
    }
    console.log('action array', updatedArray)
    dispatch(changeReelStatusSuccess([...updatedArray]));
}