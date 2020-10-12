import React from 'react'
import { Table, Row, Col, Button, Input, Modal, Space, Typography} from 'antd';
const { Column } = Table;
const Supplier = () => {
    const [visible, setVisible] = React.useState(false);
        const data = [];
        data.push(
        {
            key: 1,
            kodeSuplier: `0001234`,
            namaSuplier: `PT Pakar`,
            alamat: "Jl. Bumi resik no.5",
            kota: `Lumajang, Jawa Timur`,
            noTelp: `+62 8645`,
        },
        {
            key: 2,
            kodeSuplier: `0001234`,
            namaSuplier: `PT Pakar`,
            alamat: "Jl. Bumi resik no.5",
            kota: `Lumajang, Jawa Timur`,
            noTelp: `+62 8645`,
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
        <>
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
                    <Input placeholder="Input Kode Supplier" /> <br /> <br />
                    <Input placeholder="Input Nama" /> <br /> <br />
                    <Input placeholder="Input Alamat" /> <br /> <br />
                    <Input placeholder="Input Kota" /> <br /> <br />
                    <Input placeholder="Input Nomer Telephon" /> <br /> <br />
                    </Modal>
                    </Row>
                </Col>
                </Row>

            <Table dataSource={data} >
                <Column title="Kode Suplier" dataIndex="kodeSuplier" key="kodeSuplier" />
                <Column title="Nama Suplier" dataIndex="namaSuplier" key="namaSuplier" />
                <Column title="Alamat" dataIndex="alamat" key="alamat" />
                <Column title="Kota" dataIndex="kota" key="kota" />
                <Column title="Nomor Telephon" dataIndex="noTelp" key="noTelp" />
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
        </>
    )
}

export default Supplier
