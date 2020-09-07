import React, { Fragment, useCallback, useEffect } from "react";
import Header from "./comp/header";
import SideBarDashboard from "./comp/sidebar";
import { Card, Button } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProduct, handleGetAllProduct } from "../action";

import "antd/dist/antd.css";
import "../../assets/styles/base.scss";

const { Meta } = Card;

const Dashboard = ({ getAllProduct, handleGetAllProduct, dataAllProduct }) => {
  const getAllProductData = useCallback(() => {
    handleGetAllProduct({
      dataQuizAllType: [],
    });
    getAllProduct();
  }, [getAllProduct, handleGetAllProduct]);
  useEffect(() => {
    getAllProductData();
  }, [getAllProductData]);
  return (
    <Fragment>
      <Header />
      <div className="app-main">
        <SideBarDashboard />
        <div className="app-main_outer">
          <div className="panel">
            <div className="grid-frame">
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
                      <Button type="primary" className="submit" danger>
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
};

const mapStateToProps = (state) => {
  console.log(state);
  const dataAllProduct = state.dataAllProduct;
  return {
    dataAllProduct,
  };
};

const mapDispatchToProps = {
  getAllProduct,
  handleGetAllProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
