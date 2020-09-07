import { PRODUCT_ACTION, HANDLE_GET_ALL_PRODUCT } from "../const";

const initialState = {
  dataAllProduct: [],
};
const rootReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default rootReducer;
