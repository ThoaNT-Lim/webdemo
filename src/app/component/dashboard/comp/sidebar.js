import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "../../../../assets/styles/sidebar.scss";

const { SubMenu } = Menu;

const SideBarDashboard = (props) => {
  const [current, setCurrent] = useState("dashboard");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="app-sidebar">
      <h3>Danh mục sản phẩm</h3>
      <Menu
        onClick={handleClick}
        style={{ width: 245 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Skincare</span>
            </span>
          }
        >
          <Menu.Item key="skin1">
            <Link to='/product/toner'>Toner</Link>
          </Menu.Item>
          <Menu.Item key="skin2">
            <Link to='/product/lotion'>Lotion</Link>
          </Menu.Item>
          <Menu.Item key="skin3">Cream</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <span>Skincare</span>
            </span>
          }
        >
          <Menu.Item key="make1">chì kẻ mày</Menu.Item>
          <Menu.Item key="make2">phấn phủ</Menu.Item>
          <Menu.Item key="make3">phấn nén</Menu.Item>
          <Menu.Item key="make4">mascara</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideBarDashboard;
