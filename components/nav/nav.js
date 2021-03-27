import { Menu, Row, Col, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header } = Layout;

const Nav = () => {
    const path = useRouter().pathname;
    return (
        <Layout>
            <Header style={{}}>
                <Row justify="space-between" align="middle">
                    <Col flex="500px">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']}>
                            <Menu.Item key={path === '/' ? 'default' : ''}>
                                <Link href='/'>Home</Link>
                            </Menu.Item>
                            <Menu.Item key={path === '/events' ? 'default' : ''}>
                                <Link href='/events'>Featured</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </Layout >
    )
}

export default Nav;