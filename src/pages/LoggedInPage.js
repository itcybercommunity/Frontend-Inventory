import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "../components";
import {
  Customer,
  Jabatan,
  Sidebar,
  Dashboard,
  PO,
  Supplier,
  Login,
  Pegawai,
  Penjualan,
  TranksaksiPenjualan,
} from "../pages";
import { Row, Col } from "antd";
const LoggedInPage = () => {
  return (
    <Router>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col span={20}>
          <Switch>
            {/* <Route exact path="/dashboard" component={ Dashboard }/> */}
            <Route path="/loggedin" component={PO} />
            <Route path="/customer" component={Customer} />
            <Route path="/pegawai" component={Pegawai} />
            <Route path="/jabatan" component={Jabatan} />
            <Route path="/supplier" component={Supplier} />
            <Route path="/jual" component={Penjualan} />
            <Route
              exact
              path="/jual/transaksi"
              component={TranksaksiPenjualan}
            />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default LoggedInPage;
