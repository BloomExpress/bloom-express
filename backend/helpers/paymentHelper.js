import Bouquet from "../Models/Bouquet.js";

export const calculateOrderAmount = async (items) => {
  let totalAmount = 0;

  for (const item of items) {
    const bouquet = await Bouquet.findById(item.bouquetId);

    if (bouquet) {
      const productPrice = bouquet.price;
      const quantity = item.quantity;
      const itemTotal = productPrice * quantity;
      totalAmount += itemTotal;
    } else {
      console.error("Invalid bouquetId or bouquet not found:", item.bouquetId);
    }
  }

  return totalAmount * 100;
};
