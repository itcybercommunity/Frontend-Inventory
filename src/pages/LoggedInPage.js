import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../components";
import {Customer, Jabatan, Sidebar, Dashboard, PO, Supplier, Login} from "../pages";
import {Row, Col } from "antd";
const LoggedInPage = () => {
    return (
        <Router>      
        <Header />
            <Row >
                <Col>
                    <Sidebar />
                </Col> 
                <Col span={20}>
                    <Switch>
                    <Route path="/dashboard" component={ Dashboard }/>
                    <Route path="/customer" component={ Customer }/>
                    <Route path="/jabatan" component={ Jabatan }/>
                    <Route path="/po" component={ PO }/>
                    <Route path="/supplier" component={ Supplier }/>
                    <Redirect to="/dashboard" />
                    </Switch>
                </Col>
            </Row>
        </Router>
    )
}

export default LoggedInPage
