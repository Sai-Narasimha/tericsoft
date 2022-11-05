const intialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};
