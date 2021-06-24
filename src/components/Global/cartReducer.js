export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty, item } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  let updatedItem;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedItem = item + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
          item: updatedItem,
        };
      }

    case "PLUS":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
        item,
      };

    case "MINUS":
      product = action.cart;
      product.qty = product.qty - 1;
      updatedPrice = totalPrice - product.price;
      updatedQty = qty - 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
        item,
      };

    case "DELETE":
      updatedItem = item - 1;
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;

      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
        item: updatedItem,
      };

    case "EMPTY":
      return { shoppingCart: [], totalPrice: 0, qty: 0, item: 0 };

    default:
      return state;
  }
};
