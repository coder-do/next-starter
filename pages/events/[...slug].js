import { Row, Col, Typography, Table, Spin } from 'antd';
import { getFilteredEvents } from '../../utils/api';
const { Title } = Typography;
import { columns } from '../../data/table-data';
import Nav from '../../components/nav';

const eventFiltered = ({ events }) => {

    if (!events) {
        return (
            <div style={{ padding: '50px 25vw' }}>
                <Spin tip='Loading...'></Spin>
            </div>
        );
    }

    return (
        <>
            <Nav />
            <Row>
                <Col span={12} offset={6}>
                    <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Event filtered page</Title>
                    <Table
                        columns={columns}
                        dataSource={events}
                        pagination={{ defaultPageSize: 5 }}
                    />

                </Col>
            </Row>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const data = params.slug;
    const filteredData = await getFilteredEvents({
        year: +data[0],
        month: +data[1]
    });

    console.log(filteredData);

    return {
        props: {
            events: filteredData
        }
    };
}

export default eventFiltered;