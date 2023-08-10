export function cartReducer(state, action) {
  console.log("STAT:", action.flowerItem);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.flowerItem],
      };
    case "REMOVE_FROM_CART":
      return {
        cart: [
          ...state.cart.filter((item) => item.id !== action.flowerItem),
        ],
      };
    default:
      return state;
  }
}
