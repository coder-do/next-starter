import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

export default function eventFiltered() {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>Event filtered page</Title>
            </Col>
        </Row>
    )
}