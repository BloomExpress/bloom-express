export function calculateTotalAmount(cart) {
  let totalAmount = 0;

  for (const item of cart.items) {
    totalAmount += item.quantity * item.pricePerItem;
  }

  return totalAmount;
}
