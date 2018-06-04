//working with cart items
let cartData = []

// create reducer for cartdata 
export function cartReducer(state = cartData, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      //console.log("cart reducer ADD TO CART");
      state = [...state, action.payload];
      return state;
    case "REMOVE_FROM_CART":
      //console.log("cart reducer remove from cart");
      let c = state.filter((product) => product.id !== action.payload.id)
      return c;
    default:
      //console.log("Default");
      return state;
  }
}