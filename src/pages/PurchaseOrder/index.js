import React from 'react'
import { Table, Row, Col, Button, Input, Modal, Space, DatePicker} from 'antd';
const { Column } = Table;
const PO = () => {
  const [visible, setVisible] = React.useState(false);
  const data = [];
    data.push(
    {
      key: 1,
      date: `01/01/2020`,
      po: `PO-00123456`,
      vendor: "Testing",
      deliveryDate: `28/01/2020`,
      status: `In Progrres`,
      amount: "Rp. 500.000",
    },
    {
        key: 2,
        date: `01/01/2020`,
        po: `PO-00123456`,
        vendor: "Testing",
        deliveryDate: `28/01/2020`,
        status: `In Progrres`,
        amount: "Rp. 500.000",
      },
);
const handleModal = React.useCallback(() => {
    setVisible(item => !item);
}, [])
// showModal = () => {
//   this.setState({
//     visible: true,
//   });
// };

// const handleButton = React.useCallback(() => {
//     setVis
// })
const handleOk = e => {
  console.log(e);
  setVisible(false);
};

const handleCancel = e => {
  console.log(e);
  setVisible(false);
};

function onChange(date, dateString) {
    console.log(date, dateString);
}

    return (
        <div style={{margin: "30px", width: "100%", minWidth: "300px"}} >
            <h1>Purchase Order</h1>
            <Row align="middle" justify="space-between" style={{marginBottom: "20px"}}>
                <Col>
                    <Input placeholder="Search by vendor.." />
                </Col>
                <Col>
                    <Button type="primary" onClick={handleModal}>
                        New Purshase Order
                    </Button>
                    <Modal
                    title="New Purshase Order"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    >
                    <DatePicker onChange={onChange} style={{width: "100%"}} /> <br /> <br />
                    <Input placeholder="Input Purchase Order" /> <br /> <br />
                    <Input placeholder="Input Vendor" /> <br /> <br />
                    <DatePicker onChange={onChange} style={{width: "100%"}} placeholder="Select Delivery Date" /> <br /> <br />
                    <Input placeholder="Input Status" /> <br /> <br />
                    <Input placeholder="Input Amount" /> <br />
                    </Modal>
                </Col>
            </Row>
            <Table dataSource={data} >
                <Column title="Date" dataIndex="date" key="date" />
                <Column title="Purchase Order" dataIndex="po" key="po" />
                <Column title="Vendor" dataIndex="vendor" key="vendor" />
                <Column title="Delivery Date" dataIndex="deliveryDate" key="deliveryDate" />
                <Column title="Status" dataIndex="status" key="status" />
                <Column title="Amount" dataIndex="amount" key="amount" />
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
    )
}

export default PO