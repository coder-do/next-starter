import { Row, Col } from 'antd';
import { getEventById, getFeaturedEvents } from '../../utils/api';
import EventDetails from '../../components/events/event-detail';
import Nav from '../../components/nav';
import { GetStaticProps, GetStaticPaths } from 'next';
import { event } from '../../types/Event';

type Props = {
    events: event
}

const eventDetails: React.FC<Props> = ({ events }) => {
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

export const getStaticProps: GetStaticProps = async (context: any) => {
    const { params } = context;
    const event = await getEventById(params.id);
    const data = event.map(item => Object.values(item));

    const extraData: string[] = [
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
};

export const getStaticPaths: GetStaticPaths = async () => {
    const events = await getFeaturedEvents();
    const id = events.map(item => ({ params: { id: item.id } }));
    return {
        paths: id,
        fallback: 'blocking'
    };
};

export default eventDetails;