import { Row, Col, Typography, Table, Spin } from 'antd';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../data';
const { Title } = Typography;
import { columns } from '../../data/table-data';
import Nav from '../../components/nav';

export default function eventFiltered() {
    const router = useRouter();
    const data = router.query.slug;

    if (!data) {
        return (
            <div style={{ padding: '50px 25vw' }}>
                <Spin tip='Loading...'></Spin>
            </div>
        )
    }

    const filteredData = getFilteredEvents({
        year: +data[0],
        month: +data[1]
    });

    if (filteredData) {
        filteredData.map(item => item.isFeatured = item.isFeatured ? ['Featured'] : ['Not featured']);
    }

    return (
        <>
            <Nav />
            <Row>
                <Col span={12} offset={6}>
                    <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Event filtered page</Title>
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        pagination={{ defaultPageSize: 5 }}
                    />
                </Col>
            </Row>
        </>
    )
}