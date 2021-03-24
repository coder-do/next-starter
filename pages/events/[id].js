import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventDetails from '../../components/events/event-detail';
import Nav from '../../components/nav';

export default function eventDetaild() {
    const router = useRouter();
    const events = getEventById(router.query.id);
    if (events) {
        for (let key in events) {

        }
    }
    return (
        <>
            <Nav />
            <Row>
                <Col span={12} offset={6}>
                    <EventDetails events={events} />
                </Col>
            </Row>
        </>
    )
}