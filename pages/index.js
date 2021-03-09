import { Row, Col, Typography, Button } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

const home = () => (
    <Row>
        <Col span={12} offset={6}>
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Home page</Title>
            <Link href='/events'>
                <Button type="primary" style={{
                    display: 'block', margin: '0 auto'
                }}>Events</Button>
            </Link>
        </Col>
    </Row>
)

export default home;