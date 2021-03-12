import { Menu, Row, Col, Layout } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

const Nav = () => (
    <Layout>
        <Header style={{}}>
            <Row justify="space-between" align="middle">
                <Col flex="500px">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']}>
                        <Menu.Item key='default'>
                            <Link href='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href='/events'>Featured</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    </Layout >
)

export default Nav;