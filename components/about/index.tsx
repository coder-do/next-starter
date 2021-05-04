import * as React from 'react';
import { Alert, Row, Col, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
const { Title } = Typography;
const data = ['React js', 'Next js', 'Typescript'];

const AboutPage = () => {
    return (
        <>
            <Row style={{ marginTop: '60px', display: 'flex', flexDirection: 'column' }}>
                <Col
                    xl={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    md={{ span: 16, offset: 4 }}
                    sm={{ span: 16, offset: 4 }}
                    xs={{ span: 16, offset: 4 }}
                >
                    <Alert
                        message="ვებ გვერდზე გამოყენებული ტექნოლოგიების სია:"
                        type="info"
                        style={{ textAlign: 'center', fontSize: '18px' }}
                    />
                </Col>
                <Col
                    xl={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    md={{ span: 16, offset: 4 }}
                    sm={{ span: 16, offset: 4 }}
                    xs={{ span: 16, offset: 4 }}
                >
                    <div style={infoStyle}>
                        <div>
                            <Title level={4}>ტექნოლოგიები და ენები</Title>
                            {data.map(item => (
                                <div key={item}>
                                    <CheckOutlined style={{ marginRight: '5px' }} />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Title level={4}>მონაცემთა ბაზა</Title>
                            <CheckOutlined style={{ marginRight: '5px' }} />
                            Firebase Database
                        </div>
                        <div>
                            <Title level={4}>სტილიზაცია</Title>
                            <div>
                                <CheckOutlined style={{ marginRight: '5px' }} />
                                Antd
                                </div>
                            <div>
                                <CheckOutlined style={{ marginRight: '5px' }} />
                                Ant design icons
                            </div>
                        </div>
                        <div>
                            <Title level={4}>კოდის სტილი</Title>
                            <CheckOutlined style={{ marginRight: '5px' }} />
                            Eslint
                        </div>
                    </div>
                    <Alert
                        message="კოდის სრული ლინკი"
                        description={(
                            <>
                                <span>თუ გნებავთ ამ ვებ აპლიკაციის კოდის ნახვას, გადადით ჩემს Github-ზე:  </span>
                                <a
                                    href='https://github.com/coder-do/next-starter'
                                    style={{ color: 'blue' }}
                                    target='_blank'
                                >ლინკი</a>
                            </>
                        )}
                        type="success"
                        showIcon
                        style={{ marginTop: '30px' }}
                    />
                </Col>
            </Row>
        </>
    )
}

const infoStyle: object = {
    fontSize: '18px',
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
};

export default AboutPage;