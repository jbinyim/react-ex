const initialState = { tailList: [] };

const tailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TAIL_SUCCESS":
      return { ...state, tailList: payload.data };
    default:
      return { ...state };
  }
};

export default tailReducer;
