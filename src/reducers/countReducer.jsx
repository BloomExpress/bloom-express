export const countReduce = (state, act) => {
  switch (act.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      if (state.count > 1) {
        return { ...state, count: state.count - 1 };
      } else {
        return state;
      }
    case "res":
      return { ...state, count: 1 };
    default:
      throw new Error("Unexpected action");
  }
};

export default countReduce;
