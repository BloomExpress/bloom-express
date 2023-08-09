const countReduce = (st, act) => {
  switch (act.type) {
    case "inc":
      return { count: st.count + 1 };
    case "dec":
      if (st.count > 1) {
        return { count: st.count - 1 };
      } else {
        return { count: st.count };
      }
    default:
      throw new Error("Unexpected action");
  }
};

export default countReduce;
