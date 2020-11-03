import React from "react";
import { Button, Row, Col, Typography, Layout } from "antd";
import { useHistory } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <Layout.Header>
      <Row
        align="middle"
        justify="space-between"
        style={{ borderBottom: "1px solid #bdc3c7" }}
      >
        <Col>
          <Typography.Title level={4} style={{ color: "#fff" }}>
            Inventory
          </Typography.Title>
        </Col>
        <Col>
          <Button type="primary"  onClick={() => history.push('/login')}>
          Logout
          </Button>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
