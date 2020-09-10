import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import reducerDashboard from '../component/dashboard/reducer';
import cartReducer from '../component/cart/reducer';
import searchReducer from '../component/search/reducer';


const rootReducer = combineReducers({ reducerDashboard, cartReducer, searchReducer })

export default rootReducer;

// import { PRODUCT_ACTION } from "../component/dashboard/const";

// const initialState = {
//   dataAllProduct: [],
//   dataCart: [],
// };
// const rootReducer = (state = initialState, action) => {
//   // console.log('reducer action type', action.type);
//   switch (action.type) {
//     case PRODUCT_ACTION.HANDLE_GET_ALL_PRODUCT: {
//       const { dataAllProduct } = action.resp;
//       console.log(dataAllProduct, "reducer");
//       return {
//         ...state,
//         dataAllProduct,
//       };
//     }
//     case PRODUCT_ACTION.ADD_TO_CART: {
//       return {
//         ...state,
//         dataCart: state.dataCart,
//       }
//     }
//     default:
//       return state;
//   }
// };

// // export default productReducer;

// export default rootReducer;


