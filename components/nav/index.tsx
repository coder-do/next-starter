import { Menu, Row, Col, Layout, Button } from 'antd';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header } = Layout;

const Nav: React.FC = () => {
    const path: string = useRouter().pathname;

    return (
        <Layout>
            <Header>
                <Row justify="space-between" align="middle">
                    <Col flex="500px">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']}>
                            <Menu.Item
                                key={(path === '/') ? 'default' : ''}
                            >
                                <Link
                                    href={'/'}
                                >ყველა</Link>
                            </Menu.Item>
                            <Menu.Item
                                key={(path === '/events') ? 'default' : ''}
                            >
                                <Link
                                    href={'/events'}
                                >პოპულარული</Link>
                            </Menu.Item>
                            <Menu.Item
                                key={(path === '/about') ? 'default' : ''}
                            >
                                <Link
                                    href={'/about'}
                                >ჩვენს შესახებ</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </Layout >
    );
};

export default Nav;