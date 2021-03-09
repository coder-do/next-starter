import { Card, Col, Row, Avatar } from 'antd';

const { Meta } = Card;

export default function Events({ items }) {
    return (
        <div className="site-card-wrapper" style={{ marginTop: '50px' }}>
            <Row gutter={16}>
                {items.map(item => (
                    <Col key={item[0]} span={6} offset={2}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={item[0]}
                                src={item[5]} style={{ height: 200 }} />}
                        >
                            <Meta
                                avatar={<Avatar src={item[5]} />}
                                title={item[1]}
                            />
                            <Meta
                                style={{ margin: 0 }}
                                description={item[2]}
                            />
                            <Meta
                                title={item[3]}
                                description={item[4]}
                                style={{ marginTop: '10px', textAlign: 'end' }}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}