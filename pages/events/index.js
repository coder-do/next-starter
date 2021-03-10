import { Row, Col, Typography } from 'antd';
import Events from '../../components/events';
import { getFeaturedEvents } from '../../data';

export default function events() {
    const events = getFeaturedEvents().map(item => Object.values(item));
    return (
        <Row>
            <Col span={24}>
                <Events items={events} />
            </Col>
        </Row>
    )
}