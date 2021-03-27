import { Card, Col, Row, Avatar, Button } from 'antd';
import Link from 'next/link';
import { ReadOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Events({ items }) {
    return (
        <div className="site-card-wrapper" style={{ marginTop: '50px' }}>
            <Row gutter={16}>
                {items.map(item => (
                    <Col key={item.id}
                        xl={{ span: 6, offset: 2 }}
                        lg={{ span: 5, offset: 2 }}
                        md={{ span: 8, offset: 3 }}
                        sm={{ span: 8, offset: 3 }}   /* 8    2 */
                        xs={{ span: 11, offset: 4 }}  /* 11   4 */
                    >
                        <Card
                            hoverable
                            style={{ width: 240, marginBottom: '25px' }}
                            cover={<img alt={item.id}
                                src={item.image} style={{ height: 200 }} />}
                        >
                            <Meta
                                // avatar={<Avatar src={item[5]} />}
                                title={item.title}
                                style={{ marginBottom: '10px' }}
                            />
                            <Meta
                                style={{ margin: 0 }}
                                description={item.description}
                            />
                            <Meta
                                title={item.location}
                                description={item.date}
                                style={{ marginTop: '10px', textAlign: 'end' }}
                            />
                            <Link href={'/events/' + item.id}>
                                <Button type="primary">Details <ReadOutlined /></Button>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}