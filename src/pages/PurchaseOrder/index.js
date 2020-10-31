import React from "react";
import {
  Table,
  Row,
  Col,
  Button,
  Input,
  Modal,
  Space,
  DatePicker,
  Typography,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const { Column } = Table;
const PO = () => {
  const [visible, setVisible] = React.useState(false);
  const data = [];
  data.push(
    {
      id_supplier: "PO-00123456",
      id_employment: "PO-00123456",
      faktur: "coba dulu",
      date: "2020/01/01",
      total: "PO-00123456",
      status: "In Progrres",
      total: "Rp. 500.000",
    },
    {
      id_supplier: "PO-00123456",
      id_employment: "PO-00123456",
      faktur: "coba dulu",
      date: "2020/01/01",
      total: "PO-00123456",
      status: "In Progrres",
      total: "Rp. 500.000",
    }
  );
  const handleModal = React.useCallback(() => {
    setVisible((item) => !item);
  }, []);
  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div style={{ margin: "30px" }}>
      <Typography.Title level={4}>Purchase Order</Typography.Title>
      <Row
        align="middle"
        justify="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Col>
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            Cetak
          </Button>
        </Col>
        <Col>
          <Row gutter={12}>
            <Col>
              <Input placeholder="Search by vendor.." />
            </Col>
            <Col>
              <Button type="primary" onClick={handleModal}>
                + Create New PO
              </Button>
            </Col>
            <Modal
              title="New Purshase Order"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <DatePicker onChange={onChange} style={{ width: "100%" }} />{" "}
              <br /> <br />
              <Input placeholder="Input Id Supplier" /> <br /> <br />
              <Input placeholder="Input Id Employment" /> <br /> <br />
              <Input placeholder="Input Faktur" /> <br /> <br />
              <Input placeholder="Input Total" /> <br /> <br />
              <DatePicker
                onChange={onChange}
                style={{ width: "100%" }}
                placeholder="Select Date"
              />{" "}
              <br /> <br />
              <Input placeholder="Input Status" /> <br /> <br />
            </Modal>
          </Row>
        </Col>
      </Row>
      <Table dataSource={data}>
        <Column title="Id Supplier" dataIndex="id_supplier" key="id_supplier" />
        <Column
          title="Id Employment"
          dataIndex="id_employment"
          key="id_employment"
        />
        <Column title="Faktur" dataIndex="faktur" key="faktur" />
        <Column title="Total" dataIndex="total" key="total" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Action"
          key="action"
          render={() => (
            <Space size="middle">
              <Button type="button">Edit</Button>
              <Button type="button">Delete</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default PO;
