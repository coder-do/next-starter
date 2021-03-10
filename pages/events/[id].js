import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventDetails from '../../components/events/event-detail';

export default function eventDetaild() {
    const router = useRouter();
    const events = getEventById(router.query.id);
    return (
        <Row>
            <Col span={12} offset={6}>
                <EventDetails events={events} />
            </Col>
        </Row>
    )
}