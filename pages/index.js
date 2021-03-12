import { Row, Col, Typography } from 'antd';
import Events from '../components/events';
import { getAllEvents } from '../data';

const { Title } = Typography;

const home = () => {
    const events = getAllEvents().map(item => Object.values(item));
    return (
        <>
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>All events</Title>
            <Row>
                <Col span={24}>
                    <Events items={events} />
                </Col>
            </Row>
        </>
    )
}

export default home;