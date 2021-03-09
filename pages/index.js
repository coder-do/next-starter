import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const home = () => (
    <Row>
        <Col span={12} offset={6}>
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Home page</Title>
        </Col>
    </Row>
)

export default home;