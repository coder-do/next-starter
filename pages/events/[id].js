import { Row, Col } from 'antd';
import { getEventById, getFeaturedEvents } from '../../utils/api';
import EventDetails from '../../components/events/event-detail';
import Nav from '../../components/nav';

const eventDetails = ({ events }) => {
    return (
        <>
            <Nav />
            <Row>
                <Col span={12} offset={6}>
                    <EventDetails events={events} />
                </Col>
            </Row>
        </>
    );
};

export async function getStaticProps(context) {
    const { params } = context;
    const event = await getEventById(params.id);
    const data = event.map(item => Object.values(item));

    const extraData = [
        'id: ', 'date: ', 'description: ',
        'imagePath: ', 'isFeatured: ', 'key: ',
        'location: ', 'title: '
    ];

    data[0] = data[0].map((item, index) => item = extraData[index] + item);

    return {
        props: {
            events: data[0],
            revalidate: 20
        }
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const id = events.map(item => ({ params: { id: item.id } }));
    return {
        paths: id,
        fallback: 'blocking'
    };
}

export default eventDetails;