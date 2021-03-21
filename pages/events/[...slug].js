import { Row, Col, Typography, Table } from 'antd';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../data';
const { Title } = Typography;
import { columns } from '../../data/table-data';

export default function eventFiltered() {
    const router = useRouter();
    const data = router.query.slug;

    if (!data) { return <p style={{ textAlign: 'center' }}>loading...</p> }

    const filteredData = getFilteredEvents({
        year: +data[0],
        month: +data[1]
    });

    return (
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
    )
}