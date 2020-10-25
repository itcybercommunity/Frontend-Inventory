import React from 'react'
import { Table, Row, Col, Button, Input, Modal, Space, Typography} from 'antd';
const { Column } = Table;
const Supplier = () => {
    const [visible, setVisible] = React.useState(false);
        const data = [];
        data.push(
        {
            id: "1234",
            name: `PT Pakar`,
            address: "Jl. Bumi resik no.5",
        },
        {
            id: "1234",
            name: `PT Pakar`,
            address: "Jl. Bumi resik no.5",
        },
    );
    const handleModal = React.useCallback(() => {
        setVisible(item => !item);
    }, [])
    const handleOk = e => {
      console.log(e);
      setVisible(false);
    };
    const handleCancel = e => {
      console.log(e);
      setVisible(false);
    };
    return (
        <div style={{margin: "30px"}}>
            <Row align="middle" justify="space-between" style={{margin: "20px"}}>
                <Col>
                    <Typography.Title level={4} >Supplier</Typography.Title>
                </Col>
                <Col>
                <Row gutter={12}>
                    <Col>
                        <Input placeholder="Search by name.."  />
                    </Col>
                    <Col>
                        <Button type="primary" onClick={handleModal}>
                        + Create New Suplier
                        </Button>
                    </Col>
                    <Modal
                        title="New Supplier"
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                    <Input placeholder="Input Id" /> <br /> <br />
                    <Input placeholder="Input Name" /> <br /> <br />
                    <Input placeholder="Input Address" /> <br /> <br />
                    </Modal>
                    </Row>
                </Col>
                </Row>

            <Table dataSource={data} >
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Address" dataIndex="address" key="address" />
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

export default Supplier
