import { PRODUCT_ACTION } from "../const";

export const getAllProduct = () => {
  return { type: PRODUCT_ACTION.GET_ALL_PRODUCT };
};

export const handleGetAllProduct = (resp) => {
  return { type: PRODUCT_ACTION.HANDLE_GET_ALL_PRODUCT, resp };
};
