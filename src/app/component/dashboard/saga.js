import * as action from "./action";
import Axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { PRODUCT_ACTION } from "./const";

const getAllProductAPI = () => {
  const path = `https://5f55000e39221c00167facd4.mockapi.io/product`;
  return Axios.get(path);
};

function* getAllProduct() {
  let { data, error } = yield call(getAllProductAPI);
  console.log(data, "saga");
  if (data) {
    yield put(
      action.handleGetAllProduct({
        dataAllProduct: data || [],
        dataItem: [],
      })
    );
  } else if (error) {
    yield put(
      action.handleGetAllProduct({
        dataAllProduct: [],
        dataItem: [],
      })
    );
  }
}

export default function* root() {
  yield takeLatest(PRODUCT_ACTION.GET_ALL_PRODUCT, getAllProduct);
}
