import React, { Fragment, useCallback, useEffect, useState } from "react";
import Header from "./comp/header";
import SideBarDashboard from "./comp/sidebar";
import { Card, Button, Select } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProduct, handleGetAllProduct, handleCart } from "./action";

import "antd/dist/antd.css";
import "../../../assets/styles/base.scss";
import {addToCart} from "../cart/action";
const { Meta } = Card;

const Dashboard = ({
   getAllProduct, 
   handleGetAllProduct,
    dataAllProduct, 
    addToCart, 
  dataSearch}) => {
  // const [ cartItem, setCartItem ] = useState([]);

  const getAllProductData = useCallback(() => {
    handleGetAllProduct({
      dataQuizAllType: [],
    });
    getAllProduct();
  }, [getAllProduct, handleGetAllProduct]);
  useEffect(() => {
    getAllProductData();
  }, [getAllProductData]);
  
  const handleClick = (item) => {
    addToCart(item);
  }
  console.log(dataAllProduct)
  return (
    <Fragment>
      <Header />
      <div className="app-main">
        <SideBarDashboard />
        <div className="app-main_outer">
          <div className="panel">
            <div className="product">
              {/* {dataSearch && dataSearch.map(item => {
                return (
                  <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="product" src={item.imageUrl} />}
                    >
                      <Meta title={item.name} discription={item.discription} />
                         <Button onClick = {() => handleClick(item)} type="primary" className="submit" danger>
                         Add to card
                       </Button>
                    </Card>
                );
              })} */}
              {dataAllProduct &&
                dataAllProduct.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="product" src={item.imageUrl} />}
                    >
                      <Meta title={item.name} discription={item.discription} />
                         <Button onClick = {() => handleClick(item)} type="primary" className="submit" danger>
                         Add to card
                       </Button>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  getAllProduct: PropTypes.func,
  handleGetAllProduct: PropTypes.func,
  dataAllProduct: PropTypes.array,
  dataCart: PropTypes.array,
};

const mapStateToProps = (state) => {
  const dataAllProduct= state.reducerDashboard.dataAllProduct;
  const dataCart = state.cartReducer.cart;
  const dataSearch = state.searchReducer.works;
  console.log(dataCart, '1');
  return {
    dataAllProduct,
    // dataCart,
    dataCart,
  };
};

const mapDispatchToProps = {
  getAllProduct,
  handleGetAllProduct,
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
