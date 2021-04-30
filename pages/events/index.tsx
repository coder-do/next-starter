import { Row, Col, Typography } from 'antd';
import Events from '../../components/events';
import { getFeaturedEvents } from '../../utils/api';
import Nav from '../../components/nav';
const { Title } = Typography;
import { event } from '../../types/Event';
import { GetStaticProps } from 'next';

type Props = {
    events: event
}

const events: React.FC<Props> = ({ events }) => {
    return (
        <>
            <Nav />
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Featured events</Title>
            <Row>
                <Col span={24}>
                    <Events items={events} featured />
                </Col>
            </Row>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
    let events = await getFeaturedEvents();
    return {
        props: {
            events: events,
            revalidate: 30
        }
    };
};

export default events;