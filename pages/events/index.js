import { Row, Col, Typography } from 'antd';
import Events from '../../components/events';
import { getFeaturedEvents } from '../../utils/api';
import Nav from '../../components/nav';
const { Title } = Typography;

const events = ({ events }) => {
    return (
        <>
            <Nav />
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Featured events</Title>
            <Row>
                <Col span={24}>
                    <Events items={events} />
                </Col>
            </Row>
        </>
    )
}

export async function getStaticProps() {
    let events = await getFeaturedEvents();
    return {
        props: {
            events: events,
            revalidate: 30
        }
    }
}

export default events;