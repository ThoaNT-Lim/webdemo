import React, { Fragment, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";
import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import LoginModal from "./modal-login";
import SearchBar from "../../search/searchBar";

import "antd/dist/antd.css";
import "../../../../assets/styles/header.scss";
import { addToCart } from "../action";
import { search } from "../../search/action";

const { SubMenu } = Menu;

const { Search } = Input;
const Header = () => {
  const [current, setCurrent] = useState("dashboard");
  const [visible, setVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
    });
  });

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const dataCart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="app-header">
        <div className="header">
          <Row>
            <Col span={4}>
              <Link to="/dashboard">
                <div className="logo-text">Cosmetic</div>
              </Link>
            </Col>
            <Col span={12}>
              <SearchBar />
            </Col>
            <Col span={5}>
              {isSignedIn ? (
                <div>
                  <img
                    src={firebase.auth().currentUser.photoURL}
                    alt="avatar"
                  />{" "}
                  &nbsp;
                  <span>{firebase.auth().currentUser.displayName}</span> &nbsp;
                  <Button
                    onClick={() => firebase.auth().signOut()}
                    type="primary"
                    className="submit"
                    danger
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    onClick={() => setVisible(!visible)}
                    type="primary"
                    className="login"
                  >
                    Đăng nhập
                  </Button>
                </div>
              )}
            </Col>
            <Col span={3} className="cart">
              <Link to="/cart">
                <ShoppingCartOutlined />
                <div className="number-item-in-cart">{dataCart.length}</div>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="menu">
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="dashboard">
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <SubMenu title="Product">
              <Menu.ItemGroup title="Skincare">
                <Menu.Item key="skin1">Toner</Menu.Item>
                <Menu.Item key="skin2">Lotion</Menu.Item>
                <Menu.Item key="skin3">Cream</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Make up">
                <Menu.Item key="make1">chì kẻ mày</Menu.Item>
                <Menu.Item key="make2">phấn phủ</Menu.Item>
                <Menu.Item key="make3">phấn nén</Menu.Item>
                <Menu.Item key="make4">mascara</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="blog">Blog</Menu.Item>
            <Menu.Item key="contact">Liên hệ</Menu.Item>
          </Menu>
          <div className="cart">
            <Link to="/cart">
              <ShoppingCartOutlined />
              <div className="number-item-in-cart"></div>
            </Link>
          </div>
        </div>
      </div>
      {!isSignedIn && <LoginModal visible={visible} setVisible={setVisible} />}
    </Fragment>
  );
};
export default Header;
