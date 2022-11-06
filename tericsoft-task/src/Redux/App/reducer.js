import * as types from "./actionTypes";
const intialState = {
  data: {},
  isLoading: false,
  isError: false,
  tabName : "",
};

export const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_DATA_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case types.GET_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
