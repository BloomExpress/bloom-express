export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.flowerItem],
      };
    default:
      return state;
  }
}
