import { Row, Col, Typography } from 'antd';
import Events from '../components/events';
import EventsSearch from '../components/events/event-filter';
import { getAllEvents } from '../utils/api';
import { useRouter } from 'next/router';
import React from 'react';
import Nav from '../components/nav';
import { GetStaticProps } from 'next';
const { Title } = Typography;
import { event } from '../types/Event';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
    events: event
}

const home: React.FC<Props> = ({ events }) => {
    const router = useRouter();
    const findEvents = (year: string, month: string) => {
        router.push(`/events/${year}/${month}`);
    };

    return (
        <>
            <Nav />
            <Title level={2} style={{ textAlign: 'center', marginTop: '30px' }}>All events</Title>
            <EventsSearch onSearch={findEvents} />
            <Row>
                <Col span={24}>
                    <Events items={events} featured={false} />
                </Col>
            </Row>
        </>
    );
};

export const getStaticProps = async ({ locale }: any) => {
    let events = await getAllEvents();
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
            events: events,
            revalidate: 30
        }
    };
};

export default home;