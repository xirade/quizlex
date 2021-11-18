const reducer = (state, action) => {
  if (action.type === "TOGGLE") {
    state.isShow = !state.isShow;
    return state;
  }
  return state;
};

export default reducer;
