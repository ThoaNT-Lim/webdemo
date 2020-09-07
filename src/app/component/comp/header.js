import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";
import { Menu } from "antd";
import LoginModal from "./modal-login";

import "antd/dist/antd.css";
import "../../../assets/styles/header.scss";

const { SubMenu } = Menu;

const { Search } = Input;
const Header = () => {
  const [current, setCurrent] = useState("dashboard");
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Fragment>
      <div className="app-header">
        <div className="header">
          <Row>
            <Col span={6}>
              <Link to="/dashboard">
                <div className="logo-text">Cosmetic</div>
              </Link>
            </Col>
            <Col span={12}>
              <Search
                className="app-search"
                placeholder="Tìm kiếm"
                onSearch={(value) => console.log(value)}
              />
            </Col>
            <Col span={6}>
              <Button
                onClick={() => setVisible(!visible)}
                type="primary"
                className="login"
              >
                Đăng nhập
              </Button>
            </Col>
          </Row>
        </div>
        <div className="menu">
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="dashboard">Trang chủ</Menu.Item>
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
        </div>
        <LoginModal visible={visible} setVisible={setVisible} />
      </div>
    </Fragment>
  );
};

export default Header;
