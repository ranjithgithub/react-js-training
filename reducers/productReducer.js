//Gobal Json data
let productsData = [
    {"id": 1 , "name": "Bravia" , "price": 56000},
    {"id": 2 , "name": "Galaxy S" , "price": 37000},
    {"id": 3 , "name": "Panasonic TV" , "price": 76000}
  ]
  
  //create a reducer
  export function productReducer(state = productsData, action) {
    switch(action.type) {
      case "ADD_TO_CART":
        //console.log("Product reducer ADD TO CART");
        let p = state.filter((product) => product.id !== action.payload.id) 
        return p;
      case "REMOVE_FROM_CART":
        //console.log("Product reducer remove from cart");
        return  [...state, action.payload];
      case "ADD_PRODUCT":
        return  [...state, action.payload];
      case "UPDATE_PRODUCT":
        let u = state.filter((product) => product.id != action.payload.id) 
        return  [...u, action.payload];

      case "DELETE_PRODUCT":
        let idx = state.findIndex((e) => e.id === action.payload);
        return [...state.slice(0,idx), ...state.slice(idx+1)];
      default:
       // console.log("Default");
        return state;
    }
  }