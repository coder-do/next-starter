import { Row, Col, Typography } from 'antd';
import Events from '../components/events';
import EventsSearch from '../components/events/event-filter';
import { getAllEvents } from '../utils/api';
import { useRouter } from 'next/router';
import Nav from '../components/nav';
const { Title } = Typography;

const home = ({ events }) => {
    const router = useRouter();
    const findEvents = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return (
        <>
            <Nav />
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>All events</Title>
            <EventsSearch onSearch={findEvents} />
            <Row>
                <Col span={24}>
                    <Events items={events} />
                </Col>
            </Row>
        </>
    )
}

export async function getStaticProps() {
    let events = await getAllEvents();
    return {
        props: {
            events: events,
            revalidate: 10
        }
    }
}

export default home;