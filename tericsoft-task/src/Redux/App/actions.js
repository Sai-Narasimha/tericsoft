import * as types from "./actionTypes";

export const get_data = () => (dispatch) => {
  fetch("")
    .then((res) => res.json())
    .then((data) => dispatch({ type: types.GET_DATA_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};
