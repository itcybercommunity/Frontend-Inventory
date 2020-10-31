import React from "react";
import { Layout, Menu } from "antd";
import {
  FolderOutlined,
  TeamOutlined,
  ShoppingOutlined,
  HomeOutlined,
  BankOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;
const Sidebar = ({ menu }) => {
  return (
    <>
      <Sider theme="dark" style={{ height: "100vh" }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {/* <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item> */}
          <Menu.Item key="2" icon={<ShoppingOutlined />}>
            <Link to="/po">Purchase Order</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingOutlined />}>
            Penjualan
          </Menu.Item>
          <Menu.Item key="4" icon={<BankOutlined />}>
            Gudang
          </Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>
            <Link to="/supplier">Supplier</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
          <Link to="/pegawai">Pegawai</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<IdcardOutlined />}>
            <Link to="/jabatan">Jabatan</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FolderOutlined />}>
            Report
          </Menu.Item>
        </Menu>
      </Sider>
      {/* <MainApp /> */}
    </>
  );
};

export default Sidebar;
