import { Card, Col, Row, Avatar, Button, Badge } from 'antd';
import Link from 'next/link';
import { ReadOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Meta } = Card;

export default function Events({ items, featured }) {
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
                            cover={<Image src={'/' + item.image} alt={item.id} height={200} width={240} />}
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
                                description={(
                                    <div style={{
                                        display: 'flex', justifyContent: 'space-between', margin: '10px 0'
                                    }}>
                                        {item.date}
                                        {featured && (
                                            <CheckCircleTwoTone
                                                twoToneColor="#52c41a"
                                                style={{ fontSize: '25px' }}
                                            />
                                        )}
                                    </div>
                                )}
                                style={{ marginTop: '10px' }}
                            />
                            <Link href={'/events/' + item.id}>
                                <Button type="primary">Details <ReadOutlined /></Button>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}