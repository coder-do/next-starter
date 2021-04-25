import { Menu, Row, Col, Layout, Button } from 'antd';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

const { Header } = Layout;

const Nav: React.FC = () => {
    const router = useRouter();
    const path: string = useRouter().pathname;

    const { t } = useTranslation('common');

    return (
        <Layout>
            <Header>
                <Row justify="space-between" align="middle">
                    <Col flex="500px">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']}>
                            <Menu.Item
                                key={(path === '/' || path === '/' + router.locale) ? 'default' : ''}
                            >
                                <Link
                                    href={router.locale + '/'}
                                >{t('home')}</Link>
                            </Menu.Item>
                            <Menu.Item
                                key={(path === '/events' || path === '/events/' + router.locale) ? 'default' : ''}
                            >
                                <Link
                                    href={router.locale + '/events'}
                                >{t('featured')}</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex="300px">
                        <Link
                            href={path}
                            locale={router.locale === 'en' ? 'ge' : 'en'}
                        >
                            <Button>
                                {router.locale === 'en' ? 'ge' : 'en'}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Header>
        </Layout >
    );
};

export default Nav;