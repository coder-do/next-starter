import { Row, Col, Typography } from 'antd';
import Events from '../../components/events';
import { getFeaturedEvents } from '../../data';

const { Title } = Typography;

export default function events() {
    const events = getFeaturedEvents().map(item => {
        return Object.values(item);
    });
    console.log(events);
    return (
        <Row>
            <Col span={24}>
                <Events items={events} />
            </Col>
        </Row>
    )
}