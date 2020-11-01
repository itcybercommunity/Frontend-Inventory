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
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/pegawai" component={Pegawai} />
            <Route exact path="/jabatan" component={Jabatan} />
            <Route exact path="/po" component={PO} />
            <Route exact path="/supplier" component={Supplier} />
            <Route exact path="/jual" component={Penjualan} />
            <Route
              exact
              path="/jual/transaksi"
              component={TranksaksiPenjualan}
            />
            <Redirect to="/po" />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default LoggedInPage;
