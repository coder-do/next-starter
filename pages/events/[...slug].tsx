import { Row, Col, Typography, Table, Spin } from 'antd';
import * as React from 'react';
import { getFilteredEvents } from '../../utils/api';
import { columns } from '../../data/table-data';
import { GetServerSideProps } from 'next';
import Nav from '../../components/nav';
const { Title } = Typography;

const eventFiltered: React.FC<any> = ({ events }) => {
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
                    <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>გაფილტრული კურსები</Title>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const data = params?.slug;
    const filteredData = await getFilteredEvents({
        year: +data![0],
        month: +data![1]
    });

    return {
        props: {
            events: filteredData
        }
    };
};

export default eventFiltered;