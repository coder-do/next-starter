import { Row, Col, Typography } from 'antd';
import Events from '../../components/events';
import { getFeaturedEvents } from '../../data';

const { Title } = Typography;

export default function events() {
    const events = getFeaturedEvents().map(item => Object.values(item));
    return (
        <>
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Featured events</Title>
            <Row>
                <Col span={24}>
                    <Events items={events} />
                </Col>
            </Row>
        </>
    )
}