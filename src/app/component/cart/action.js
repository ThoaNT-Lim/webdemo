import CART_ACTION from './const';

export const addToCart = (item) => {
    return { type: CART_ACTION.ADD_TO_CART, item};
}

export const handleCart = (resp) => {
    return { type: CART_ACTION.HANDLE_CART, resp };
}

export const getAllItem = () => {
    return { type: CART_ACTION.GET_ALL_ITEM };
}

export const handleGetAllItem = (resp) => {
    return { type: CART_ACTION.HANDLE_GET_ALL_ITEM };
}

export const handleResponseError = (params) => {
    return { type: USER_ACTION.HANDLE_RESPONSE_ERROR, params };
  };