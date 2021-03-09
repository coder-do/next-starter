import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

export default function eventDetaild() {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Event details page</Title>
            </Col>
        </Row>
    )
}