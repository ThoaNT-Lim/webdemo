import * as action from "./action";
import * as cartAction from '../cart/action';
import Axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { CART_ACTION } from "./const";
 
const addToCartAPI = (item) => {
    const path = `https://5f5438b2e5de110016d51e1c.mockapi.io/api/v1/cartInItem`;
    return Axios.put(path, item);
}

function* addToCart(item) {
    try {
        let { data, errMess } = yield call(addToCartAPI, item);
        if (data) {
          yield call(getAllItemAPI, { item: item.get('id') });
          yield put(cartAction.getAllItem());
          message.success('Cập nhật thành công');
        } else if (errMess) {
          console.log('lỗi');
        }
      } catch (e) {
        message.error(e?.message || e?.data?.message);
        yield put(
          action.handleResponseError({
            error: e?.message || e?.data?.message,
          }),
        );
      }
}

const getAllItemAPI = () => {
  path = `https://5f5438b2e5de110016d51e1c.mockapi.io/api/v1/cartInItem`;
  return Axios.get(path);
}

function* getAllItem() {
  let {data, error } = yield call(getAllItemAPI);
  // if(data)

}

