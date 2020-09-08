import { PRODUCT_ACTION } from "./const";

const initialState = {
  dataAllProduct: [],
  dataCart: [],
};
const reducerDashboard = (state = initialState, action) => {
  // console.log('reducer action type', action.type);
  switch (action.type) {
    case PRODUCT_ACTION.HANDLE_GET_ALL_PRODUCT: {
      const { dataAllProduct } = action.resp;
      console.log(dataAllProduct, "reducer");
      return {
        ...state,
        dataAllProduct,
      };
    }
    // case PRODUCT_ACTION.HANDLE_CART: {
    //   const { dataAllProduct } = action.resp;
    //   console.log(dataCart, 'item');
    //   return {
    //     ...state,
    //     dataCart,
    //   }
    // }
    default:
      return state;
  }
};

// export default productReducer;

export default reducerDashboard;